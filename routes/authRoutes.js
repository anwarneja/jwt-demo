const express = require('express');
const router = express.Router();
const  {loginruth,refreshToken}=require("../controllers/authController")//removed the post request/api from the authroutes
// const {verifytoken}=require("../middleware/authMiddleware")

// router.get('/post',verifytoken,post);
router.post('/login',loginruth);
router.post('/refreshtoken',refreshToken)





module.exports = router;