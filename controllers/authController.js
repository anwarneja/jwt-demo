const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");

let refreshTokens=[]; // temporary storage

exports.loginruth = async (req, res) => {
  //authenticate user
  const { name, age } = req.body;

  const user = { name: name, userage: age };

  const accestoken = jwt.sign(user, process.env.ACCESTOKEN, {
    expiresIn: "1m",
  });
 
  // refresh token
   const refreshToken = jwt.sign(user, process.env.REFRESHTOKEN, { expiresIn: "7d" }); // long-lived

 refreshTokens.push(refreshToken);    // store refresh token

  res.json({ accestoken: accestoken, 
    user,
  REFRESHTOKEN:refreshToken });
};

// 🔹 New endpoint: generate new access token using refresh token
exports.refreshToken=async(req,res)=>{
  const {token}=req.body;
  if(!token) return res.sendStatus(401); //no token sent
  
  //This belw one code allows us to Only accept refresh tokens that exist in our refreshTokens array.
  if(!refreshTokens.includes(token)) return res.sendStatus(403); //not in store

 jwt.verify(token,process.env.REFRESHTOKEN,(err,decoded)=>{
 
   const {name,userage}=decoded;
     console.log(name, userage); // or perform some operations based on the extracted values

          

   //create another accestoken
const newacesstoken=   jwt.sign({name,userage},process.env.ACCESTOKEN,{expiresIn:"3m"});


    res.json({NEWacesstoken:newacesstoken});
   
 

 })

     
}

//looged out request
exports.logout=async(req,res)=>{
  const {token}=req.body;
  if(!token) return res.sendStatus(401); //no token

  refreshTokens=refreshTokens.filter((selecter)=>selecter!==token)

  res.json({message:"looged out succesfully!"})


}


// exports.post = async (req, res) => {
//   const post = [
//     {
//       name: "anwar",
//       content: "holy book"
//     },
//     { name: "yelgoche enat yene fifkir", content: "sunnah book" },
//     { name: "fatima", content: "hadith notes" },
//   ];
//   const userposts=post.filter(p=>p.name===req.user.name)

//   res.json({ post:userposts,//optional
//      loogedinuser: req.user});
// };




//acess 
// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoieWVsZ29jaGUgZW5hdCB5ZW5lIGZpZmtpciIsInVzZXJhZ2UiOiIyNSIsImlhdCI6MTc1ODk3NDAwMCwiZXhwIjoxNzU4OTc0MDYwfQ.YgYUnwXA4GdHcky0OjSRHJMYHX1sAOUhyAX-T2BZuzM


//refresh
// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiYW53YXIiLCJ1c2VyYWdlIjoiMjIiLCJpYXQiOjE3NTkwNTc0OTcsImV4cCI6MTc1OTY2MjI5N30.aQSscZ3hjY6_CtpLP3StV40CwGvzP1YL0ucxAFbGflU