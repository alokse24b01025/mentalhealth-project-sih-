const express = require('express');
const router = express.Router();
const User = require('../models/User'); 

// 1. GET shared profiles (Only fetch APPROVED stories)
router.get('/shared', async (req, res) => {
  try {
    const sharedProfiles = await User.find({ 
      isSharingResiliency: true,
      resiliencyStatus: 'approved' 
    })
    .select('name location bio imageUrl')
    .limit(10);
    res.json(sharedProfiles);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 2. GET pending stories (FIXED: Improved query to catch all non-approved entries)
router.get('/pending', async (req, res) => {
  try {
    // This query explicitly looks for users who want to share 
    // but do not have an 'approved' or 'rejected' status yet.
    const pending = await User.find({ 
      isSharingResiliency: true, 
      $or: [
        { resiliencyStatus: 'pending' },
        { resiliencyStatus: { $exists: false } }, // Catches old users without the field
        { resiliencyStatus: null }                // Catches null values
      ]
    }).select('_id name bio location email resiliencyStatus');
    
    console.log(`[Moderation] Found ${pending.length} pending stories.`);
    res.json(pending);
  } catch (err) {
    console.error("Fetch Pending Error:", err);
    res.status(500).json({ error: "Failed to fetch pending stories." });
  }
});

// 3. PATCH moderation action (Approve or Reject)
router.patch('/moderate/:id', async (req, res) => {
  const { status } = req.body; 
  
  // Validate status input
  if (!['approved', 'rejected'].includes(status)) {
    return res.status(400).json({ error: "Invalid status update." });
  }

  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id, 
      { resiliencyStatus: status },
      { new: true }
    );
    
    if (!updatedUser) return res.status(404).json({ error: "User not found" });
    
    res.json({ message: `Story ${status} successfully.`, updatedUser });
  } catch (err) {
    res.status(500).json({ error: "Moderation action failed." });
  }
});

// 4. POST to update user's sharing status (Submission)
router.post('/opt-in', async (req, res) => {
  const { userId, quote, location } = req.body;

  if (!userId || !quote || !location) {
    return res.status(400).json({ error: "Missing required information." });
  }

  try {
    const updateData = {
      isSharingResiliency: true,
      bio: quote,
      location: location,
      resiliencyStatus: 'pending' 
    };

    // Use findByIdAndUpdate to ensure we are targeting the specific user logged in
    const user = await User.findByIdAndUpdate(
      userId, 
      updateData, 
      { new: true, runValidators: true } 
    );

    if (!user) return res.status(404).json({ error: "User profile not found." });

    console.log(`[Submission] User ${user.email} submitted a story for review.`);
    res.json({ message: "Your story has been submitted for moderation.", user });
  } catch (err) {
    console.error("Opt-in Error:", err.message);
    res.status(500).json({ error: "Server error during update." });
  }
});

module.exports = router;