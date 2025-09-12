import dotenv from 'dotenv';
dotenv.config();
import { GoogleGenerativeAI } from "@google/generative-ai";
console.log('Loaded GEMINI_API_KEY:', process.env.GEMINI_API_KEY);

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export async function getMitrResponse(prompt){
    try {
    // Use the correct Gemini model name for the API version
        const model = genAI.getGenerativeModel({model : "gemini-1.5-flash"});

        const ans = await model.generateContent(prompt);
        const response = await ans.response;
        const text = response.text();
        return text;
    }
    catch (error){
        console.error("Error calling Google AI:", error);

        return "I'm sorry, I'm having trouble connecting right now. Please try again later.";
    }
}

