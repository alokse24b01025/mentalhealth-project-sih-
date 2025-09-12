import express from "express";
const router = express.Router();
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import {check , validationResult } from 'express-validator';
import User from "../db/schema.js";
import dotenv from 'dotenv';
dotenv.config();

router.post(
  '/',
  [
    // Validation checks
    check('email', 'Please include a valid email').isEmail(),
    check('password', 'Please enter a password with 6 or more characters').isLength({ min: 6 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    try {
      let user = await User.findOne({ email });

      if (user) {
        return res.status(400).json({ msg: 'User already exists' });
      }

      user = new User({ email, password });

      // Hash the password before saving
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(password, salt);
      await user.save();

      // Create and return the JWT
      const payload = { user: { id: user.id } };

      jwt.sign(
        payload,
        process.env.JWT_SECRET, // Replace with a secret from your config/env file!
        { expiresIn: 360000 }, // Token expires in 100 hours (for example)
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

export default router;