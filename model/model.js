const mongoose = require('mongoose');
const {Schema,model}=mongoose;
const ShopSchema=new Schema({
    name:{type:String,require:true},
    age:{type:Number},
    favoriteFood:{type:Array}
})
const ShopDB=mongoose.model("user",ShopSchema);

module.exports=ShopDB