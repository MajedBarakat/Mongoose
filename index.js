const express = require('express');
const app = express();
const PORT=process.env.PORT || 5003;
const DB=require('./config/.env');
const ShopDB=require('./model/model');

//New

// const bady = new ShopDB({name:"majed",age:26,favoriteFood:['pizza']});
// bady.save((err)=>{
//        (err)?console.log("error while saving",err):console.log("saved successfully")
//         })

// app.listen(PORT,(err)=>{
//     err ? console.log(err)
//     : console.log(`server running ${PORT}.....!`)
// });


//new malti

// ShopDB.create([
//     {name:"mahamad",
//     age:24,
//     favoriteFood :['riz']},
//     {name:"ahmed",
//     age:28,
//     favoriteFood :['mango']},
//     {name:"morad",
//     age:22,
//     favoriteFood :['spacti']},
//     {name:"mahdi",
//     age:35,
//     favoriteFood :['cuscusi']}
// ])


//Find by name

// const getname = async()=>{
//     try{
//         const data =await ShopDB.find({"name":name});
//         console.log(data)
//     }catch (error){
//         console.log(error)
//     }}


    //Find by favoriteFood

// const getfavoriteFood = async()=>{
//     try{
//         const data =await ShopDB.findOne({"favoriteFood":favoriteFood});
//         console.log(data)
//     }catch (error){
//         console.log(error)
//     }}


    //Find by id

// const getid = async()=>{
//     try{
//         const data =await ShopDB.findById({"id":id});
//         console.log(data)
//     }catch (error){
//         console.log(error)
//     }}

//Update by id

// const update=async()=>{
//     try{
//         const data=await ShopDB.findById({_id:""})
//         await ShopDB.updateOne(data,{favoriteFood:  "hamburger"})
//             }catch(error){
//                 console.log(error)
//             }
//     }

//Update by name

// const update=async()=>{
//         try{
//             const data=await ShopDB.findOneAndUpdate({name:'majed'},{$set:{age:20}})
//         console.log(data)        
//         }catch(error){
//                     console.log(error)
//                 }
//         }

//Delete by id

// const dalete = async()=>{
//         try{
//             await ShopDB.findByIdAndRemove({_id:""})
//             console.log(data)
//         }catch (error){
//             console.log(error)
//         }
// }

// Dalete

// const dalete = async()=>{
//     try{
//         await ShopDB.deleteMany({name:'majed'})
//         console.log(data)
//     }catch (error){
//         console.log(error)
//     }
// }

// const search = async()=>{
//     try {
//         let favoriteFood="pizza"
//     const data = await Person.find({"favoriteFood":favoriteFood})
//     .limit(2)
//     .sort({ name: 1 })
//     .select({ age: false })
//     console.log(data)
//     } catch (error) {
//         console.log(error)
//     }
// }


// dalete();
// update();
// getname();
// getfavoriteFood();
// getid();
// search();
// DB();