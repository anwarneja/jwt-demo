const express = require('express');
const router = express.Router();
const  {loginruth,post}=require("../controllers/authController")


router.get('/post',post);
router.post('/login',loginruth);





module.exports = router;