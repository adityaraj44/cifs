const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = mongoose.connect(process.env.MONGO_URI, {
      useFindAndModify: false,
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });

    console.log(`MongoDB connected: ${(await conn).connection.host}`.red);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = connectDB;
