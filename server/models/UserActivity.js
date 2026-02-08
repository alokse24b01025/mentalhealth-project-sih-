const mongoose = require('mongoose');

const ActivitySchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  type: { type: String, enum: ['chat', 'resource_view', 'booking'], required: true },
  content: String, // Chat message or Resource Title
  metadata: {
    category: String, // e.g., 'Anxiety', 'Depression', 'Trauma'
    sentiment: String, // 'positive', 'negative', 'urgent'
    duration: Number, // for resources
  },
  timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Activity', ActivitySchema);