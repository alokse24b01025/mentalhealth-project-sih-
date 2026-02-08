const express = require('express');
const router = express.Router();
const mongoose = require('mongoose'); // Added for ObjectId conversion
const Activity = require('../models/UserActivity');

router.get('/', async (req, res) => {
  try {
    const { userId } = req.query;
    if (!userId) return res.status(400).json({ message: "User ID required" });

    // 1. CONVERSION: Ensure the ID format matches what is stored in MongoDB
    // This solves the issue where the query finds 0 results for a string ID.
    const queryId = mongoose.isValidObjectId(userId) 
      ? new mongoose.Types.ObjectId(userId) 
      : userId;

    // 2. Fetch all activity for this specific user
    const history = await Activity.find({ userId: queryId }).sort({ timestamp: -1 });
    
    // DEBUG: Check your terminal to see if the backend actually finds the logs
    console.log(`Alerts Query: Found ${history.length} logs for user ${userId}`);

    let personalizedAlerts = [];

    // 3. CHAT ANALYSIS: Scan for emotional distress keywords
    const chatLogs = history.filter(a => a.type === 'chat');
    
    // Comprehensive keyword list
    const depressionKeywords = ['hopeless', 'trauma', 'depressed', 'sad', 'crying', 'help', 'lonely', 'anxiety', 'trouble'];
    
    const detectedTriggers = chatLogs.filter(log => 
      log.content && depressionKeywords.some(word => log.content.toLowerCase().includes(word))
    );

    // FIX: Trigger if at least 1 keyword is found for testing purposes
    if (detectedTriggers.length >= 1) {
      personalizedAlerts.push({
        type: 'Emotional Insight',
        message: 'It takes strength to acknowledge these feelings. Your journey to recovery is important to us.',
        action: 'Visit Peer Forum',
        link: '/peer-support',
        priority: 'High'
      });
    }

    // 4. RESOURCE ANALYSIS: Suggest education if they haven't viewed guides
    const resourceViews = history.filter(a => a.type === 'resource_view');
    if (resourceViews.length === 0) {
      personalizedAlerts.push({
        type: 'Recovery Step',
        message: 'Education is a powerful tool for healing. Explore our specialized wellness guides.',
        action: 'Browse Resources',
        link: '/resources',
        priority: 'Medium'
      });
    }

    // 5. BOOKING ANALYSIS: Escalate priority for repeated distress
    if (detectedTriggers.length >= 3) {
      personalizedAlerts.push({
        type: 'Care Alert',
        message: 'Based on your recent messages, a one-on-one session with a counselor might offer the best support.',
        action: 'Book Counselor',
        link: '/booking',
        priority: 'Critical'
      });
    }

    // 6. Return the findings
    res.json(personalizedAlerts);

  } catch (error) {
    console.error("Alert Route Error:", error);
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;