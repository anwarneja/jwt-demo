// const verifytoken=(req,res,next)=>{


//     // BEARER TOKEN 
// }

// module.exports=verifytoken;

exports.verifytoken=(req,res,next)=>{
    const authheader=req.headers['authorization'];
    const  token=authheader && authheader.split('')[0];


    if(!token)return res.sendStatus(401); //unauthorized

    jwt.verify(token,process.env.ACCESTOKEN,(err,decoded));
    if(err) return res.sendStatus(403); // Forbidden if invalid
req.user=decoded;
next();




    
}