import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
// ...existing code...
import mongoose from 'mongoose';

dotenv.config();

mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.error(err));

// Ensure the API key is present before starting
if (!process.env.GEMINI_API_KEY) {
  throw new Error('GEMINI_API_KEY is not set in the .env file!');
}

const app = express();

app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}));
app.use(express.json());

// Import chat, auth, and user routes
import chatRoute from './routes/chat.js';
import authRoute from './routes/auth.js';
import userRoute from './routes/user.js';

// Use chat route for /api/chat
app.use('/api', chatRoute);
// Use auth route for /api/auth
app.use('/api/auth', authRoute);
// Use user route for /api/user
app.use('/api/user', userRoute);

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));