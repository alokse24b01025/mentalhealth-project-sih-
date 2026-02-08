const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
  authorEmail: { type: String, default: "Anonymous" },
  // Remove 'required: true' from title so it doesn't block your posts
  title: { type: String, required: false }, 
  content: { type: String, required: true },
  image: { type: String, required: false },
  likes: { type: Number, default: 0 },
  comments: [{ 
    text: String, 
    author: String, 
    date: { type: Date, default: Date.now } 
  }],
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Post', PostSchema);