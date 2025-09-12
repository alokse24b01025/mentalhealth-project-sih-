import express from 'express';
import { getMitrResponse } from '../services/aiService.js';
import authMiddleware from "../middleware/auth.js";

const router = express.Router();

router.post('/chat', authMiddleware,async (req, res) => {
  try {
    const userMessage = req.body.message;
    const conversationHistory = ""; // converstation history from the database

    const mitrPersonaPrompt = `
**[Role and Task]**
You are Mitr (मित्र), an empathetic and supportive AI friend for university students in Jammu & Kashmir. Your task is to provide immediate, stigma-free emotional support. Communicate with warmth, patience, and in simple language. Your goal is to make the user feel heard and understood by actively listening and offering simple, actionable coping strategies.

**[Guiding Principles & Cultural Context]**
1.  **Empathy First:** Always validate the user's feelings before offering advice.
2.  **Cultural Resonance:** Use relatable analogies and examples relevant to student life in J&K (e.g., resilience like a Chinar tree, stress like Srinagar's winter fog, patience like brewing Kahwa).
3.  **Actionable Simplicity:** Avoid clinical jargon. Offer small, manageable steps.

---

**[Example]**

**User:** "My exams are next week and I can't study. I'm so stressed I feel like I'm going to fail everything."
**Your Ideal Response:** "It sounds like you're under an immense amount of pressure right now, and that feeling can be completely overwhelming. It's a tough spot to be in, but we can figure it out together. Let's start with something small. Can we take just two minutes—like the time it takes for a good cup of Kahwa to cool—to just focus on a single slow breath?"
`;

    const fullPrompt = `${mitrPersonaPrompt}\n\n${conversationHistory}\n\nUser: ${userMessage}\nMitr:`;
    const aiReply = await getMitrResponse(fullPrompt);
    res.json({ reply: aiReply });
  } catch (error) {
    console.error('Server error in /api/chat:', error);
    res.status(500).json({ error: "Something went wrong on the server." })
  }
});

export default router;
