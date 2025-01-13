# Auto-README Generator

This tool automatically generates README files for your projects by analyzing your codebase and using Google's Gemini API.

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Gorav22/Readme-generator-package.git
   ```

2. **Navigate to the project directory:**

   ```bash
   cd Readme-generator-package
   ```

3. **Install dependencies:**

   ```bash
   npm install
   ```

4. **Set up your Gemini API Key:**

   Create a `.env` file in the root directory and add your Gemini API key:

   ```
   API_KEY=YOUR_GEMINI_API_KEY
   ```

## Usage

1.  Run the generator:

    ```bash
    node index.js
    ```

2.  Answer the prompts for your project name and GitHub URL.

The script will analyze your code, generate a README.md file, and save it in the project's root directory.

## How it Works

1.  **Code Collection:** The script gathers all `.js`, `.ts`, `.jsx`, `.tsx`, and `.py` files in your project (excluding `node_modules`, `dist`, and `build` directories).
2.  **Code Analysis:**  It sends the combined code content to the Gemini API for analysis using a prompt engineered to extract project details like description, installation steps, tech stack, and features.
3.  **README Generation:**  It uses the analysis results to populate a predefined README template (`template.js`) and creates the `README.md` file.

## Tech Stack

* **Gemini API:**  For code analysis and README content generation.
* **Node.js:**  Runtime environment.
* **Inquirer:**  For interactive prompts.
* **Glob:**  For file pattern matching.
* **fs (File System):** For file reading and writing.
* **dotenv:** For environment variable management.



## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## License

MIT
