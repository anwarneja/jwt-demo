// const verifytoken=(req,res,next)=>{


//     // BEARER TOKEN 
// }

// module.exports=verifytoken;

exports.verifytoken=(req,res,next)=>{
    const authheader=req.headers['authorization'];
    const token=authheader && authheader.split('')[0];
}