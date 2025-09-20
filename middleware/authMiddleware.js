// const verifytoken=(req,res,next)=>{


//     // BEARER TOKEN 
// }

// module.exports=verifytoken;

exports.verifytoken=(req,res,next)=>{
    const authheader=req.headers['authorization'];
    const token=authheader && authheader.split('')[0];


    if(token==null){
        return res.sendStatus(401);
    }

    jwt.verify(token,process.env.ACCESTOKEN,(err,user)=>{
        if(err){
            return res.sendStatus(403);
        }
        req.user=user;
        next();
    })
}