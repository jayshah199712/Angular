var express = require('express');
var router = express.Router();

const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/testdb', { useMongoClient: true });

var db=mongoose.connection;
db.on('error',function(){console.error("Connect Error");});
db.once('open',function(){
  console.log('Connected');
});
var productModel=require('../model/product');
router.get('/', function(request, response, next) {
  productModel.find((error,result)=>{
    if(error)
      console.error("Error::"+error);
    response.json(result);
  });
});
router.get("/:id",(request,response)=>{
      productModel.findOne({'productId':request.params.id},(error,resp)=>{
        if(error)
          response.json(error);
        else
          response.json(resp);
      });
    });
router.post('/',(request,response,next)=>{
    product1=new productModel(request.body);
    product1.save((error)=>{
      if(error)
        response.json(error);
      else {
        response.json(product1);
      }
    })});
module.exports = router;
