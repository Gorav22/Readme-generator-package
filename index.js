#!/usr/bin/env node

const fs = require("fs-extra");
const glob = require("glob");
const { analyzeCode } = require("./geminiclient");

async function generateReadme() {
  console.log("Generating README.md...");

  // Find all relevant code files in the repository
  const files = glob.sync("**/*.{js,ts,jsx,tsx,py}", {
    ignore: ["node_modules/**", "dist/**", "build/**"],
  });

  // Concatenate all file contents into a single string
  let combinedContent = "";
  files.forEach((file) => {
    const codeContent = fs.readFileSync(file, "utf-8");
    combinedContent += `### File: ${file}\n\n${codeContent}\n\n`;
  });

  // Send the combined content to Gemini API
  const analysis = await analyzeCode("project-files", combinedContent);
//   console.log(analysis)
  // Handle Gemini API response to generate README.md content
  if (!analysis) {
    console.error("Failed to generate project analysis. Check Gemini API response.");
    return;
  }
  try{
  const projectDetails = {
    projectName: analysis.projectSummary.projectName || "My Project",
    description: analysis.projectSummary.description || "A brief project description.",
    preRequisites: analysis.preRequisites || ["Node.js (v16 or above)"],
    installationSteps: analysis.installationSteps || "Installation steps go here.",
    environmentVariables: analysis.environmentVariables || "No environment variables documented.",
    techStack: {
      frontend: analysis.techStack?.frontend || [],
      backend: analysis.techStack?.backend || [],
    },
    features: analysis.features || [],
    contributing: analysis.contributing || "Contribution guidelines go here.",
    license: analysis.license || "MIT License.",
};
const readmeContent = generateReadmeTemplate(projectDetails);
}
catch(err){

  // Write the README.md file
  fs.writeFileSync("README.md",analysis );
  console.log("README.md has been successfully generated!");
}
}
generateReadme();