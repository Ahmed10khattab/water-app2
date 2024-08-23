const jwt =require('jsonwebtoken');
const User = require('../../model/auth');


const verfiyToken=(req,res,next)=>{
    const token =req.header('access_token');

     if(!token){
    return res.status(400).json('access denied'); 
     }
try {
    const verfied=jwt.verify(token,"sec");
    req.user=verfied;
    next();
} catch (error) {
   return res.status(401).json('invalid token');
    
}
    
}


const verfiyUser=(req,res,next)=>{
    verfiyToken(req,res,()=>{
        if(req.user._id ==  req.user._id || req.user.isAdmin){
            next();
        }else{
            res.status(402).json("you are  not autherized");
        }
    })
}


const verfiyAdmin=(req,res,next)=>{
    verfiyToken(req,res,()=>{
        if(req.user.isAdmin===true){
            next();
        }else{
            res.status(403).json("you are  not autherized as admin");
        }
    })
}


module.exports={verfiyUser,verfiyToken,verfiyAdmin}