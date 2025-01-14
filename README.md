# Gorav README Generator

Easily generate `README.md` files for your projects by analyzing your codebase using the Gemini API.

---

## Installation

### 1. Install the Package

Run the following command in your terminal:

```bash
npm install gorav-readme-generator
```
Alternatively, you can install it globally:
```bash
npm install -g gorav-readme-generator
```

2. Set Up Your Project
Create a new .js file in your project directory:
```bash
touch filename.js
```

3. Import and Use the Generator
Add the following code to your .js file:

```bash 
import { generateReadme } from "gorav-readme-generator";

generateReadme();
```

4. Configure the API Key
Create a .env file in your project directory and add your Gemini API key:

```bash
GEMINI_API_KEY="your-gemini-api-key"
```
5. Run the Generator
Run the .js file you created, and the package will generate a README.md file for your project.

Check out a sample README.md file here:

https://github.com/Gorav22/Readme-generator-package/blob/main/SampleREADME.md

### How it Works
1. Collects Project Information: Prompts the user for project name and GitHub URL.
2. Code Analysis: Scans the project directory for .js, .ts, .jsx, .tsx, and .py files (excluding   node_modules, dist, and build directories). Concatenates the content of these files.
3. Gemini API Integration: Sends the combined code content to the Gemini API to analyze the project and generate README content.
4. README Generation: Uses the analysis from the Gemini API to create a structured README.md file, including sections like Introduction, Installation, Features, and more. If the structured generation fails, it writes the raw Gemini output to README.md.

### Dependencies
1. glob: For file pattern matching.
2. fs: For file system operations.
3. inquirer: For interactive command-line prompts.
4. @google/generative-ai: For interacting with the Gemini API.
5. dotenv: For loading environment variables.