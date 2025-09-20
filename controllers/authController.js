const express = require('express');
const router=express.Router();
const jwt = require('jsonwebtoken');

exports.loginruth =async (req, res) =>{
    //authenticate user
const {username,age}=req.body;

const user={name:username,
    age
} ;

const accestoken=jwt.sign(user,
    process.env.ACCESTOKEN,
   { expiresIn:'2h'} 

   )
   res.json({accestoken:accestoken,
               user})
}
 

exports.post=async(req,res)=>{
     const post=[
        {
        name:"anwar",
        content:"holy book"
        }
     ]
    res.json(post);
}