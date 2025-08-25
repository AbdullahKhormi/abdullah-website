const mongoose =require("mongoose")

const dotenv = require("dotenv");
dotenv.config();
const mongoUrl = process.env.MONGO_URL_ATLAS;
console.log("Loaded MONGO_URL:", mongoUrl);

const connectDB = async()=>{
    try{
        await mongoose.connect(mongoUrl,{

        });
        console.log('DB connected sucessfully')
    } catch (error){
        console.log("DB connection error " , error)
        process.exit(1)
    }
}
module.exports = connectDB;