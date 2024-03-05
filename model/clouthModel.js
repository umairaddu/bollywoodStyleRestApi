import mongoose from "mongoose";


const clouthSchema=new mongoose.Schema({
    category:{type:String,required:true,trim:true},
    imgUrl:{type:String,required:true ,trim:true},
    price:{type:Number,required:true ,trim:true},
    description:{type:String,required:true ,trim:true} ,
    title:{type:String,required:true ,trim:true},
}, {timestamps : true})


const clouthModel=mongoose.model("clouth",clouthSchema)



export default clouthModel