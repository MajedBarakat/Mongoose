const mongoose =require("mongoose");
const DB=async()=>{
    try{
        await mongoose.connect(process.env.mongoURI)
        console.log("database connected......")
    }catch(error){
        console.log(error)
    }
}
require("dotenv").config({path:"./.env"})

module.exports=DB