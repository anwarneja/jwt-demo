const express = require('express');
const router = express.Router();
const  {loginruth,post}=require("../controllers/authController")
const {verifytoken}=require("../middleware/authMiddleware")

router.get('/post',verifytoken,post);
router.post('/login',loginruth);





module.exports = router;