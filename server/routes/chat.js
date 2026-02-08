const express = require('express');
const router = express.Router();
const { GoogleGenerativeAI } = require("@google/generative-ai");
const Activity = require('../models/UserActivity'); 

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

router.post('/', async (req, res) => {
  const { message, language, userId } = req.body;

  // DEBUG LOG 1: Check if the backend received the ID from the frontend
  console.log("--- New Chat Request ---");
  console.log("Message:", message);
  console.log("UserID Received:", userId); 

  try {
    // 1. CRISIS DETECTION
    const crisisKeywords = ["suicide", "kill myself", "end my life", "harm myself"];
    const isCrisis = crisisKeywords.some(k => message.toLowerCase().includes(k));

    if (isCrisis) {
      return res.json({ 
        reply: "I am deeply concerned. Please speak with a professional immediately.", 
        crisisDetected: true 
      });
    }

    // 2. AI GENERATION
    const model = genAI.getGenerativeModel({ model: "gemini-3-flash-preview" });
    const prompt = `System: You are an empathetic mental health assistant. Respond briefly in ${language}. \nUser: ${message}`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    // 3. DATA PERSISTENCE
    // If this block isn't running, 'userId' is likely undefined or null
    if (userId && userId !== "null") {
      try {
        const newActivity = await Activity.create({
          userId: userId,
          type: 'chat',
          content: message,
          timestamp: new Date()
        });
        // This MUST show in your terminal for the Care Alerts to work
        console.log(`✅ Success: Activity saved to MongoDB for User: ${userId}`);
      } catch (dbError) {
        console.error("❌ Database Error while saving activity:", dbError);
      }
    } else {
      // DEBUG LOG 2: If this shows, the issue is in Chatbot.jsx
      console.warn("⚠️ Warning: No valid UserID received. Chat not saved to history.");
    }

    res.json({ reply: text, crisisDetected: false });

  } catch (error) {
    console.error("AI ROUTE ERROR:", error);
    res.status(500).json({ reply: "Connection issue.", error: error.message });
  }
});

module.exports = router;