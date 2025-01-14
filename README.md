# Auto-README Generator

This project automatically generates README files for your code repositories using the power of the Google Gemini API. It analyzes your codebase, extracts key information, and creates a structured README with sections like Introduction, Installation, Features, and more.

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Gorav22/Readme-generator-package.git
   ```

2. **Navigate to the project directory:**

   ```bash
   cd your-repository
   ```

3. **Install dependencies:**

   ```bash
   npm install
   ```

4. **Set up your Google Gemini API Key:**

    Create a `.env` file in the root directory and add your API key:

    ```
    API_KEY=YOUR_GEMINI_API_KEY
    ```


## Usage

1. Run the generator:

   ```bash
   node index.js
   ```

2. Answer the prompts about your project name and GitHub URL.

3. The script will analyze your code, generate the README content, and save it as `README.md` in your project's root directory.

## How it Works

1. **Code Analysis:** The script uses `glob` to find all relevant code files (JS, TS, Python) in your project, excluding common directories like `node_modules`.
2. **Gemini API Integration:** It sends the combined code content to the Google Gemini API with a prompt designed to generate a README.md file. The prompt requests specific sections and provides guidelines for a clear and concise output.
3. **README Generation:** The `template.js` file provides a template structure for the README.  The script populates this template with data received from the Gemini API's analysis.
4. **File Creation:** The generated README content is written to `README.md`.

## Dependencies

* `glob`: For finding files matching a pattern.
* `fs`: For file system operations.
* `inquirer`: For interactive command-line prompts.
* `@google/generative-ai`:  For interacting with the Google Gemini API.
* `dotenv`: For loading environment variables.


## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.

## License

MIT
