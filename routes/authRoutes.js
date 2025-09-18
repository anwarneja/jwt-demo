const express = require('express');
const app = express();
const router = express.Router();



const posts=[
    {title:"quran",
    content:"holy book"
    }
,
    {title:"kitab",
    content:"sunnah book"
}
]

router.get('/post',(req,res)=>{
   res.json(posts);
   console.log(req.body);
})

router.post('/login',(req,res)=>{
    //authenticate user
    const user={id:1,username:"user1",email:"a@b.com"}
    res.json(user);


})



module.exports = router;