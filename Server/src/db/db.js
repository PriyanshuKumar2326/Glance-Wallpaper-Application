const mongoose=require("mongoose");

function connectDB(){
  mongoose.connect(process.env.MONGODB_URI)

  .then(()=>{console.log("MongoDB is Connected")})
  .catch((err)=>{console.log("MongoDb is not connected",err)})
}

module.exports=connectDB;