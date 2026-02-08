const express = require('express');
const router = express.Router();
const Resource = require('../models/Resource'); // Ensure you have this model

// This route handles the "Upload" from your Admin Dashboard
router.post('/upload', async (req, res) => {
  try {
    const { title, type, url, description } = req.body;

    const newResource = new Resource({
      title,
      type,
      url,
      description
    });

    await newResource.save();
    res.status(201).json({ message: "Resource saved to MongoDB!" });
  } catch (err) {
    console.error("Upload Error:", err.message);
    res.status(500).json({ message: "Server failed to save resource" });
  }
});

// This route is what your Resources Page uses to show the data
router.get('/', async (req, res) => {
    try {
        const resources = await Resource.find();
        res.json(resources);
    } catch (err) {
        res.status(500).json({ message: "Error fetching data" });
    }
});

module.exports = router;