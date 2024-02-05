const {MongoClient}= require('mongodb');

const client= new MongoClient("mongodb://127.0.0.1:27017");


const connection=  async ()=>{

 await client.connect();
 console.log("connectied to db")

}

const dbName= client.db("handson");

module.exports={dbName,connection}