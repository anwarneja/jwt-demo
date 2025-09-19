const express = require('express');
const router=express.Router();


exports.loginruth =async (req, res) =>{
    //authenticate user
    const user={id:1,username:"user1",email:"a@b.com"}
    res.json(user);


}
 