const express= require('express');
const bcrypt=require('bcrypt')
const jwt= require('jsonwebtoken')
const auth=require('./auth');
const data=require('./Routes/userRoutes')
const{dbName,connection}=require('./Config/db')
 const UserCollection=dbName.collection("E-commerce");
const route=require("./Router/productRouting")
const app=express();
app.use("/route",route);
app.use(express.json());

const secretKey="sairam";
const saltRound=10;
// let arr=[];


app.use('/routes',data)


app.post('/register',async (req,res)=>{

const data=req.body;

const find= await UserCollection.findOne({email:data.email});

console.log(find);
if(find){
    return res.send({msg:"Email Already Exist"});

}

data.password=bcrypt.hashSync(data.password,saltRound);

const token=jwt.sign({user:data.email},secretKey)

 const insertedData=UserCollection.insertOne(data);
 console.log(insertedData);

console.log(data);
console.log(token);
// console.log(arr);
// res.end("success in registration");

res.send({msg:"user Registered Successfully",token:token,insertedData:insertedData})



})


app.post('/login',async (req,res)=>{

const data=req.body;
const find=await UserCollection.findOne({email:data.email});;
console.log(find);
if(find){

    const account=bcrypt.compare(data.password,find.password)


    if(account){

        const token=jwt.sign({user:data.email},secretKey,{expiresIn:'3d'});
        console.log(token,"token");
        
     return res.send({msg:"Login Successful!",token:token})
    }

    else{
        return res.send({msg:"Password Incorrect"})
    }
}
else{
    return res.send({msg:"You Haven't Registered Yet"})

}


})

app.get('/dashboard', auth, (req,res)=>{
   return  res.send("welcome to dashboard");
})











app.listen(8000,()=>{
    try{
        console.log("server is running in 4000");
        connection();
    }
    catch (err){
        console.log(err, "error while loading");
    }});