
# Gorav-README Generator

This tool automatically generates README.md files for your projects by analyzing your codebase and using the Gemini API.

## Installation

1. **Node.js and npm:** Ensure you have Node.js (v16 or above) and npm installed.
2. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/your-repository.git
   ```
3. **Install dependencies:**
   ```bash
   cd your-repository
   npm install
   ```
4. **Gemini API Key:**  Set up a `.env` file in the root directory and add your Gemini API key:
   ```
   API_KEY=YOUR_GEMINI_API_KEY
   ```

## Usage

1. **Navigate to the project directory:**
   ```bash
   cd your-repository
   ```
2. **Run the generator:**
   ```bash
   node index.js
   ```
   The script will prompt you for your project name and GitHub URL.
3. **A `README.md` file will be generated** in the project root directory.

## How it Works

1. **Collects Project Information:** Prompts the user for project name and GitHub URL.
2. **Code Analysis:** Scans the project directory for `.js`, `.ts`, `.jsx`, `.tsx`, and `.py` files (excluding `node_modules`, `dist`, and `build` directories).  Concatenates the content of these files.
3. **Gemini API Integration:** Sends the combined code content to the Gemini API to analyze the project and generate README content.
4. **README Generation:** Uses the analysis from the Gemini API to create a structured README.md file, including sections like Introduction, Installation, Features, and more.  If the structured generation fails, it writes the raw Gemini output to README.md.

## Dependencies

* `glob`: For file pattern matching.
* `fs`: For file system operations.
* `inquirer`: For interactive command-line prompts.
* `@google/generative-ai`: For interacting with the Gemini API.
* `dotenv`: For loading environment variables.


## Contributing

Contributions are welcome!  Please create an issue or submit a pull request.

## License

MIT
