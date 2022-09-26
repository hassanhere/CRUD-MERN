const express=require("express")


const router=new express.Router()

const Userdata=require('../models/schema_for_data')










// GET ALL RECORDS
router.get("/api/alldata",async(req,res)=>{
    try
    {
        const data=await Userdata.find({}).sort({"rank":1})
        res.send(data)
    }
    catch(err)
    {
        res.status(400).send(err)
    }
})













//DELETE ALL
router.delete("/delete/alldata",async(req,res)=>{
    try
    {
        const data=await Userdata.deleteMany({})
        res.send(data)
        console.log(data)
    }
    catch(err)
    {
        res.status(400).send(err)
    }
})








//MONGOOSE QUERIES

// Model.deleteMany()
// Model.deleteOne()
// Model.find()
// Model.findById()
// Model.findByIdAndDelete()
// Model.findByIdAndRemove()
// Model.findByIdAndUpdate()
// Model.findOne()
// Model.findOneAndDelete()
// Model.findOneAndRemove()
// Model.findOneAndReplace()
// Model.findOneAndUpdate()
// Model.replaceOne()
// Model.updateMany()
// Model.updateOne()








// GET RECORD BY NAME
//http://localhost:3000/name/Arshad javelin
router.get("/name/:name",async(req,res)=>{
    try
    {
        const first_nname=req.params.name;
        const data=await Userdata.find({first_name:first_nname})
        res.send(data)
        console.log(data)
    }
    catch(err)
    {
        res.status(400).send(err)
    }
})














// UPDATE RECORD NAME
//localhost:3000/update/62f2df518f3aa9fa7dcb28d1 
//ALSO INPUT 1 FIELD JSON DATA LIKE NAME OR RANKING OR ALL OF THEM
router.patch("/update/:id",async(req,res)=>{
    try
    {
        const _id=req.params.id;
        const data=await Userdata.findByIdAndUpdate(_id,req.body,{
            //THIS STATEMENT WILL SEND UDATED DATA VIA LINE 107
            //WITHOUT THIS LINE PREVIOUS DATA WILL BE SEND VIA LINE 107
            new:true
        })
        res.send(data)
    }
    catch(err)
    {
        res.status(500).send(err)
    }
})













//works
// GET RECORD BY ID
//http://localhost:3000/id/62f2df518f3aa9fa7dcb28d1
router.get("/id/:id",async(req,res)=>{
    try
    {
        const iid=req.params.id;
        const data=await Userdata.findById({_id:iid})
        res.send(data)
    }
    catch(err)
    {
        res.status(400).send(err)
    }
})







//POST 1 RECORD
router.post("/insert",async(req,res)=>{
    try
    {
         const new_data=new Userdata(req.body)
         console.log(new_data)
         const answer=await new_data.save()
         console.log(req.body)
        res.status(201).send(answer)
    }
    catch(e)
    {
        res.status(400).send(e)
    } 
})














//works
// DELETE
//localhost:3000/delete/62f2f84d9fabdaa581e0519c
router.delete("/delete/:id",async(req,res)=>{
    try
    {
        const data=await Userdata.findByIdAndDelete(req.params.id)
        res.send(data)
    }
    catch(err)
    {
        res.status(500).send(err)
    }
})



module.exports=router