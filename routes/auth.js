
const router=require("express").Router();
const jwt=require("jsonwebtoken");

router.post("/login",(req,res)=>{
 const {username}=req.body;
 const role=username==="admin"?"admin":"user";
 const token=jwt.sign({username,role},process.env.JWT_SECRET);
 res.json({token,role});
});

module.exports=router;
