const mongoose= require('mongoose');
var productSchema=new mongoose.Schema({
    productId:{type:String,unique:true},
    productName:{type:String},
    productDesc:{type:String},
    productPrice:{type:Number}
});
module.exports=mongoose.model('product',productSchema);
