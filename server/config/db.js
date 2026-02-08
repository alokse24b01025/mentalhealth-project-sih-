const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB Connected Successfully');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

// CHECK THIS LINE: It must be exactly like this
module.exports = connectDB;