const route= require('express').Router();
const computerData = require('../data/computers');
// const {UserCollection}=require("../index");

const mobileData=require("../data/mobiles");
const watchData = require('../data/watch');
const womanData = require('../data/woman');
const menData=require('../data/men');


route.get("/mobiles", (req,res)=>{
    const allProduct= mobileData;
    return res.send(allProduct)
})

route.get("/computers", (req,res)=>{
    const allProduct= computerData;
    return res.send(allProduct)
})

route.get("/watches", (req,res)=>{
    const allProduct= watchData;
    return res.send(allProduct)
})
route.get("/mens", (req,res)=>{
    const allProduct= menData;
    return res.send(allProduct)
})
route.get("/womens", (req,res)=>{
    const allProduct= womanData;
    return res.send(allProduct)
})

module.exports=route;