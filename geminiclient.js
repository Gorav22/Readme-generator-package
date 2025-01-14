// const axios = require("axios");
import dotenv from 'dotenv'
dotenv.config();
import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro" });


export async function analyzeCode(files, codeContent) {
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
### Project Name

Introduction
Bloguer is a modern, serverless blogging platform designed to provide a seamless experience for creating, managing, and sharing blog content. Built with the latest technologies, Bloguer emphasizes speed, scalability, and a developer-friendly ecosystem.

The platform supports rich text formatting, image uploads, user authentication, and dynamic content delivery, ensuring a superior blogging experience.

Setup and Installation
Pre-Requisites
Node.js (v16 or above)
Cloudflare Workers CLI (Wrangler)
PostgreSQL Database
npm or bun or yarn for package management
Installation
Clone the repository:
git clone https://github.com/your-username/your-repository.git 
cd bloguer  
Install dependencies for both the client and server:
# Navigate to server and install
cd server
npm install

# Navigate to client and install
cd ../client
npm install
Set up Environment Variables for required variables and setup.

Deploy the server:

wrangler publish  
Run the frontend locally:
npm run dev  
Environment Variables
The project relies on several environment variables. Create a .env file in both the server and client directories with the following variables:

For Backend:
DATABASE_URL=your_postgresql_connection_string  
JWT_SECRET=your_jwt_secret
For Frontend:
VITE_BACKEND_URL=https://your-cloudflare-worker-url  
Tech Stack
Frontend
React: For building a responsive and dynamic user interface.
React Router: For handling routing in the single-page application.
Zustand: Lightweight state management to handle user and session data.
Tailwind CSS: For styling the application with a focus on customization and a responsive layout.
React Hot Toast: For displaying user-friendly notifications.
TypeScript: Ensures type safety and better developer experience.
Axios: For API requests and client-server communication.
Backend
Hono: Ultra-fast web framework for building the serverless API.
PostgreSQL: Relational database for managing user and blog data.
Prisma: ORM for seamless database integration with PostgreSQL.
JWT (JSON Web Tokens): For secure user authentication and session management.
Cloudflare Workers: Serverless platform for deploying the backend globally.
Features
Blog Management: Create, edit, and delete blog posts.
User Authentication: Secure login and signup with JWT.
Rich Text Editor: Enables dynamic content creation.
Serverless Architecture: Ensures speed and scalability with Cloudflare Workers.
Contributing
Contributions to Bloguer are welcome and appreciated! Feel free to fork the repository, submit issues, or create pull requests to suggest new features or fix bugs.

License
This project is licensed under the MIT License - see the LICENSE.md file for details.
`;

    const result = await model.generateContent([prompt]);
    const readme = result.response.text();
    // console.log(readme); 
    return readme;
  } catch (error) {
    console.error(error.message);
    return null;
  }
}

