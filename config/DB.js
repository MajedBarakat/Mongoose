const mongoose =require("mongoose");
require("dotenv").config({path:".env"})


const DB=async()=>{
    try {
        await mongoose.connect(process.env.mongo_URI)
    } catch (error) {
        console.log("error ", error)
        
    }
}

module.exports=DB