const mongoose = require("mongoose");
const express = require("express");
const Paper = require("../models/Paper");
const { constants } = require("buffer");
const router = express.Router();
router.post("/createpaper", async (req, res) => {
  try {
    const newPaper = new Paper({
        topic:req.body.topic,
  description:req.body.description ,
  status: req.body.status,
  email:req.body.email,
  filepath:req.body.filepath,
     
    });

    await newPaper.save();
       console.log("Saved to DB:", newPaper);
    res.send("paper saved successfully!");
  } catch (err) {
    console.error("Error saving paper:", err);
    res.status(500).send("Error saving paper");
  }
});
router.post("/viewpaper",async(req,res)=>{
    try{
const{email}=req.body;
const papers= await Paper.find({email});
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
module.exports=router;
