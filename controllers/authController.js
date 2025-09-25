const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");

exports.loginruth = async (req, res) => {
  //authenticate user
  const { name, age } = req.body;

  const user = { name: name, userage: age };

  const accestoken = jwt.sign(user, process.env.ACCESTOKEN, {
    expiresIn: "5m",
  });
 
  // refresh token
   const refreshToken = jwt.sign(user, process.env.REFRESHTOKEN, { expiresIn: "7d" }); // long-lived


  res.json({ accestoken: accestoken, 
    user,
  REFRESHTOKEN:refreshToken });
};

// 🔹 New endpoint: generate new access token using refresh token
exports.refreshToken=async(req,res)=>{
  const {token}=req.body;
  if(!token) return res.sendStatus(401); //no token sent

 jwt.verify(token,process.env.REFRESHTOKEN,(err,decoded)=>{

   const {name,userage}=decoded;
     console.log(name, userage); // or perform some operations based on the extracted values



   //create another accestoken
const newacesstoken=   jwt.sign({name,userage},process.env.accestoken,{expiresIn:"3m"});


    res.json({NEWacesstoken:newacesstoken});
   
 

 })

     
}


exports.post = async (req, res) => {
  const post = [
    {
      name: "anwar",
      content: "holy book",
    },
    { name: "yelgoche enat yene fifkir", content: "sunnah book" },
    { name: "fatima", content: "hadith notes" },
  ];
  const userposts=post.filter(p=>p.name===req.user.name)

  res.json({ post:userposts,//optional
     loogedinuser: req.user});
};




//acess 
//  eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoieWVsZ29jaGUgZW5hdCB5ZW5lIGZpZmtpciIsInVzZXJhZ2UiOiIyNSIsImlhdCI6MTc1ODgwMzIxMCwiZXhwIjoxNzU4ODEwNDEwfQ.JgRd_5g40WAkbkiEpJF8UNgLzPDX75_NGkvFfka91rU


//refresh
//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoieWVsZ29jaGUgZW5hdCB5ZW5lIGZpZmtpciIsInVzZXJhZ2UiOiIyNSIsImlhdCI6MTc1ODgwMzIxMCwiZXhwIjoxNzU5NDA4MDEwfQ.k5Otmt1YhKFxsPFLcocw9T-hA35xWlecK9eaAY7gZXw