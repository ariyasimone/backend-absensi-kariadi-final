
const mongoose=require("mongoose");

module.exports=mongoose.model("Absensi", new mongoose.Schema({
 nama:String,
 nip:String,
 shift:String,
 latitude:Number,
 longitude:Number,
 status:String,
 waktu:{type:Date,default:Date.now}
}));
