// const axios = require("axios");
require("dotenv").config();
const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.API_KEY);

const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro" });

// const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
// const GEMINI_API_URL = process.env.GEMINI_API_URL;

async function analyzeCode(fileName, codeContent) {
  try {
    prompt=`${fileName} ${codeContent}`
    const result = await model.generateContent([prompt]);
    return result.response.text();
  } catch (error) {
    console.error(`Error analyzing ${fileName}:`, error.response?.data || error.message);
    return null;
  }
}

module.exports = { analyzeCode };
