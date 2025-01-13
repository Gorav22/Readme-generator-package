// const axios = require("axios");
require("dotenv").config();
const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.API_KEY);

const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro" });


async function analyzeCode(files, codeContent) {
  try {
    const prompt=`Generate the readme of the project whose code is below: ${codeContent}`;
    const result = await model.generateContent([prompt]);
    console.log(result.response.text());
    return result.response.text();
  } catch (error) {
    console.error(`Error analyzing ${fileName}:`, error.response?.data || error.message);
    return null;
  }
}

module.exports = { analyzeCode };
