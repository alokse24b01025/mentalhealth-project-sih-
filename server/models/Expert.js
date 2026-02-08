const mongoose = require('mongoose'); // <--- YOU ARE MISSING THIS LINE

const ExpertSchema = new mongoose.Schema({
  name: { type: String, required: true },
  role: { type: String, enum: ['Doctor', 'Therapist', 'Survivor'], default: 'Doctor' },
  specialization: { type: String, required: true }, 
  image: { type: String }, 
  availability: { type: String },
  phone: { type: String, required: true },
  email: { type: String, required: true },
  bio: { type: String }
});

module.exports = mongoose.model('Expert', ExpertSchema);