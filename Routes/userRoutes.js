const route= require('express').Router();
const{dbName}=require('../Config/db')
const collection=dbName.collection("Employee");

route.get('/queryOne',(req,res)=>{
    const data= collection.find().toArray();
    console.log(data);
    res.send(data)
})

module.exports=route