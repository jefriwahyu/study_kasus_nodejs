//filename : connection.js

//import mongoose
const mongoose = require("mongoose");

//connection to mongoDB

const connectDB = async () => {
  try {
    //url to database
    const con = await mongoose.connect("mongodb://localhost:27017/StudyCase", {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      // useFindAndModify: false,
      // useCreateIndex: true,
    });
    console.log(`MongoDB Connected : ${con.connection.host}`)
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
}

module.exports = connectDB;
