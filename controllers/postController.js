exports.getPosts=async(req,res)=>{
    const post=[
        {name:"anwar",
         content:"devloper"
        },
        {
            name:"ilham",
            content:"ustaza wife"
        },
        {
            name:"khulud",
            content:"child"
        }
    ]
const userposts=post.filter(p=>p.name===req.user.name)

  res.json({ post:userposts,//optional
     loogedinuser: req.user.name});
};