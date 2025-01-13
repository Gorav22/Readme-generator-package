// const axios = require("axios");
require("dotenv").config();
const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.API_KEY);

const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro" });


async function analyzeCode(files, codeContent) {
  try {
    const prompt = `Generate a concise and informative README.md file for the following code:

\`\`\`
${codeContent}
\`\`\`

**Guidelines:**

* Focus on the core functionality and purpose of the code.
* Include sections for installation, usage, and any relevant information.
* Keep the README concise and easy to understand.
* Avoid unnecessary fluff or filler text.

**Example:**

**[Include a sample README.md fragment here to guide Gemini]**`;

    const result = await model.generateContent([prompt]);
    const readme = result.response.text();
    console.log(readme)
    // Remove potential ````markdown` and ````` from the beginning and end
    readme = readme.replace('/^```markdown\n/', '').replace('/\n```$'/, ''); 
    return readme;
  } catch (error) {
    console.error(`Error analyzing ${files}:`, error.response?.data || error.message);
    return null;
  }
}

module.exports = { analyzeCode };
