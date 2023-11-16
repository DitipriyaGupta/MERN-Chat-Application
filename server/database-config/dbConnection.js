const mongoose = require("mongoose");
const connectDb = async () => {
  try {
    const connect= await mongoose.connect(process.env.MONGODB_URI, {
      // useNewUrlParser: true,
      // useUnifiedTopology: true,
    });
    console.log(`MongoDb connected :${connect.connection.host}`)
  } catch (error) {
    console.error(error);
  }
};
module.exports=connectDb