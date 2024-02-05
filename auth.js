

const jwt=require('jsonwebtoken');
const secretKey="sairam";


const auth=(req,res,next)=>{

    const data=req.headers["authorization"];

    console.log(data);
    const token=data.split('')[1];
    console.log(token,"token");

    if(token){

    jwt.verify(token,secretKey,(err,validate)=>{
        if(validate){
             res.send({msg:"Loggin successfully"})
            return next();
        }
        return res.send({msg:"user is not authorized"});
    })
}
else{
    return res.send("Dont have any access")
}



}


module.exports=auth;