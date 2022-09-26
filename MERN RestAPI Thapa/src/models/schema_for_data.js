const mongoose=require("mongoose")

const Schema=new mongoose.Schema({
    rank:{
        type:Number,
        required:true,
        unique:true
    },
    first_name:{
        type:String,
        required:true,
        trim:true
    },
    last_name:{
        type:String,
        required:true,
        trim:true
    },
    date:{
        type:Date,
        required:true,
        trim:true
    },
    gender:{
        type:String,
        required:true,
        trim:true
    },
})

module.exports=mongoose.model("userdatas",Schema)



