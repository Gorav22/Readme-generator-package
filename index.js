// const fs = require("fs-extra");
// const glob = require("glob");
import { glob } from "glob";
import fs from "fs";
// const inquirer = require("inquirer");
import inquirer from "inquirer";
import { analyzeCode } from "./geminiclient.js";

async function generateReadme() {
  console.log("Welcome to the README generator!");

  // Step 1: Prompt the user for details
  const answers = await inquirer.prompt([
    {
      type: "input",
      name: "projectName",
      message: "What is the name of your project?",
    },
    {
      type: "input",
      name: "githubURL",
      message: "What is the GitHub repository URL for this project?",
      default: "https://github.com/your-username/your-repository.git",
    },
  ]);
  console.log("Generating README.md...");

  // Step 2: Find all relevant code files in the repository
  const files = glob.sync("**/*.{js,ts,jsx,tsx,py}", {
    ignore: ["node_modules/**", "dist/**", "build/**"],
  });

  // Step 3: Concatenate all file contents into a single string
  let combinedContent = "";
  files.forEach((file) => {
    const codeContent = fs.readFileSync(file, "utf-8");
    combinedContent += `### File: ${file}\n\n\`\`\`javascript\n${codeContent}\n\`\`\`\n\n`;
  });

  // Append project details
  combinedContent += `## Project Name: ${answers.projectName}\n`;
  combinedContent += `## GitHub URL: ${answers.githubURL}\n`;

  // Send the combined content to Gemini API
  const analysis = await analyzeCode("project-files", combinedContent);
  //   console.log(analysis)
  // Handle Gemini API response to generate README.md content
  if (!analysis) {
    console.error(
      "Failed to generate project analysis. Check Gemini API response."
    );
    return;
  }
  try {
    const projectDetails = {
      projectName: analysis.projectSummary.projectName || "My Project",
      description:
        analysis.projectSummary.description || "A brief project description.",
      preRequisites: analysis.preRequisites || ["Node.js (v16 or above)"],
      installationSteps:
        analysis.installationSteps || "Installation steps go here.",
      environmentVariables:
        analysis.environmentVariables || "No environment variables documented.",
      techStack: {
        frontend: analysis.techStack?.frontend || [],
        backend: analysis.techStack?.backend || [],
      },
      features: analysis.features || [],
      contributing: analysis.contributing || "Contribution guidelines go here.",
      license: analysis.license || "MIT License.",
    };
    const readmeContent = generateReadmeTemplate(projectDetails);
  } catch (err) {
    // Write the README.md file
    fs.writeFileSync("README.md", analysis.replace("```markdown", ""));
    console.log("README.md has been successfully generated!");
  }
}
generateReadme();
