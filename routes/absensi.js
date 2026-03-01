
const router=require("express").Router();
const Absensi=require("../models/Absensi");

router.post("/presensi", async(req,res)=>{
 const {nama,nip,shift,latitude,longitude}=req.body;
 const status="Hadir";

 const data=new Absensi({nama,nip,shift,latitude,longitude,status});
 await data.save();

 res.json({msg:"Presensi tersimpan"});
});

router.get("/rekap", async(req,res)=>{
 const data=await Absensi.find().sort({waktu:-1});
 res.json(data);
});

module.exports=router;
