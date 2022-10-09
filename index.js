const express = require('express');
const app = express();
require("dotenv").config({path:"./config/.env"})
const PORT=process.env.PORT || 5003;
const DB=require('./config/.env');
const ShopDB=require('./model/model');

//New
const coffee = new ShopDB({title:"express",price:2.0});
// coffee.save((err)=>{
//     if(err) return console.log(err)
// })

// app.listen(PORT,(err)=>{
//     err ? console.log(err)
//     : console.log(`server running ${PORT}.....!`)
// });

//Find
const getAll = async()=>{
    try{
        const data =await ShopDB.find({});
        console.log(data)
    }catch (error){
        console.log(error)
    }}

//Update
const update=async()=>{
    const query={title:"express"}
        const data=await ShopDB.findOneUpdate(query,{title:capusan},(data)=>{
            try{console.log(data)
            }catch(error){
                console.log(error)
            }
    }).clone()
}

//Del
const deleteShop = async()=>{
    await ShopDB.findByIdAndDelete({_id:""},(data)=>{
        try{
            console.log(data)
        }catch (error){
            console.log(error)
        }
    }).clone
}

// deleteShop();
// update();
// getAll();
DB();