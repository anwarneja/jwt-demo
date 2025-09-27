const express=require('express');
const router=express.router;
const {getPosts}=require('../controllers/postController');

const {verifytoken}=require("../middleware/authMiddleware")


router.get('/post',verifytoken,getPosts);

module.exports = router;