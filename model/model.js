const mongoose = require('mongoose');
const {Schema,model}=mongoose;
const ShopSchema=new Schema({
    title:{type:String,require:true},
    price:{type:Number,default:1}
})
const ShopDB=mongoose.model("Shops",ShopSchema);

module.exports=ShopDB