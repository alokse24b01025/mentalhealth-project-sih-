// models/User.js
import dotenv from 'dotenv';
dotenv.config();
import mongoose from 'mongoose'

mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.error(err));


const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true // No two users can have the same email
  },
  password: {
    type: String,
    required: true
  }
});

const User = mongoose.model('User', UserSchema);
export default User;