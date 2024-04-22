const mongoose=require('mongoose');
const express = require('express')
const router=express.Router();

router.get('/getdata/',async (req,res)=>{
    try{
        
        const fetched_data1=await mongoose.connection.db.collection('notes');        
        global.notes=await fetched_data1.find({}).toArray();
        res.send([global.notes])
    }
    catch(error){
        console.log(error.message)
        res.send("Server Error");
    } 
})

module.exports=router;
