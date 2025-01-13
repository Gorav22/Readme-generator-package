# Auto-README Generator

This tool automatically generates README.md files for your projects by analyzing your codebase and using Google's Gemini API.

## Installation

1. **Node.js and npm:** Ensure you have Node.js (v16 or above) and npm installed.
2. **Clone the repository:** `git clone https://github.com/your-username/your-repository.git`
3. **Install dependencies:** `npm install`
4. **Set up Gemini API Key:** Create a `.env` file in the root directory and add your Gemini API key: `API_KEY=YOUR_GEMINI_API_KEY`

## Usage

1. **Navigate to project directory:** `cd your-repository`
2. **Run the generator:** `node index.js`

This will create a `README.md` file in the root of your project.

## How it works

The script analyzes all `.js`, `.ts`, `.jsx`, `.tsx`, and `.py` files in your project (excluding `node_modules`, `dist`, and `build` directories). It sends the combined code content to the Gemini API, which generates a README.md file based on the code.  The generated README attempts to include sections like project name, description, prerequisites, installation steps, environment variables, tech stack, features, contributing guidelines, and license information.  If the structured README generation fails, the raw Gemini output is used as a fallback.

## Contributing

Contributions are welcome!  Please open an issue or submit a pull request.

## License

MIT
