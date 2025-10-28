const mongoose = require("mongoose");
const express = require("express");
const Paper = require("../models/Paper");
const Review = require("../models/Review");
const router = express.Router();
router.get("/paperreviewview",async(req,res)=>{
    try{
const{status}=req.body;
const papers= await Paper.find({status});
if(papers.length==0)res.status(404).send("paper not found");
else{
    console.log("The papers are:",papers);
    res.json(papers);
}
    }
    catch (err) {
     res.status(500).send("Server error");
 }
});
router.post("/paperreviewersubmit",async(req,res)=>
{
    try{
        const newReview = new Review({
            paper_id:req.body.paper_id,
            user_id:req.body.user_id,
            score:req.body.score,
            comment:req.body.comment,
 
        });
        await newReview.save();
        console.log("Save to DB:",newReview);
        await Paper.updateOne(
  { _id: req.body.paper_id }, 
  { $set: { status:"under_admin" } }
);


        res.send("Review Saved !");
    }
    catch(err)
    {    console.log("Error saving review",err);
        res.send(" error to save review");
    }
});
module.exports=router;