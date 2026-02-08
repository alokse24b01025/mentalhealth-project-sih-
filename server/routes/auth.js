const express = require('express');
const router = express.Router();
const User = require('../models/User');

// --- REGISTER ROUTE ---
router.post('/register', async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log(`Registration attempt for: ${email}`);

    // 1. Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      console.log("Registration failed: Email already exists");
      return res.status(400).json({ message: 'User already exists' });
    }

    // 2. Create and save new user
    const newUser = new User({ email, password });
    await newUser.save();

    console.log("Registration successful!");
    // Return user data so frontend can auto-login
    res.status(201).json({ 
      message: 'User created successfully', 
      user: { email: newUser.email, id: newUser._id } 
    });

  } catch (err) {
    console.error("Server Register Error:", err.message);
    res.status(500).json({ message: 'Server registration error' });
  }
});

// --- LOGIN ROUTE ---
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log(`Login attempt for: ${email}`);

    const user = await User.findOne({ email });
    if (!user) {
      console.log("User not found in DB");
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    // Plain text comparison to match your current DB setup
    if (user.password !== password) {
      console.log("Password mismatch");
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    console.log("Login successful!");
    res.status(200).json({ 
      message: 'Login success', 
      user: { email: user.email, id: user._id } 
    });

  } catch (err) {
    console.error("Server Login Error:", err.message);
    res.status(500).json({ message: 'Server login error' });
  }
});

module.exports = router;