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
API_KEY="your-gemini-api-key"
```
5. Run the Generator
Run the .js file you created, and the package will generate a README.md file for your project.

Check out a sample README.md file here:

https://github.com/Gorav22/Readme-generator-package/blob/main/SampleREADME.md