const express = require('express');
const router = express.Router();
const  {loginruth}=require("../controllers/authController")

const posts=[
    {title:"quran",
    content:"holy book"
    }
,
    {title:"kitab",
    content:"sunnah book"
}
]

router.get('/post',loginruth);

router.post('/login',(req,res)=>{
    //authenticate user
    const user={id:1,username:"user1",email:"a@b.com"}
    res.json(user);


})



module.exports = router;