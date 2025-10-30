const express = require("express");
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const Paper = require("../../models/Paper");
const router = express.Router();

// Create uploads folder if not exists
const uploadFolder = path.join(__dirname, "../../uploads");
if (!fs.existsSync(uploadFolder)) {
  fs.mkdirSync(uploadFolder, { recursive: true });
}

// Multer storage setup
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadFolder);
  },
  filename: (req, file, cb) => {
    const uniqueName =
      Date.now() + "-" + Math.round(Math.random() * 1e9) + path.extname(file.originalname);
    cb(null, uniqueName);
  },
});

const upload = multer({ storage });

router.post("/uploadpaper", upload.single("pdfFile"), async (req, res) => {
  try {
    const { paperTitle, paperDes, videoURL, email } = req.body;
    const file = req.file;

    if (!paperTitle || !paperDes || !videoURL || !file) {
      return res.status(400).send("Missing fields");
    }

    const newPaper = new Paper({
      topic: paperTitle,
      description: paperDes,
      videoURL: videoURL,
      filepath: file.path,
      email: email,
      status: "Under Reviewer",
    });

    await newPaper.save();
    res.send("done");

  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
});

module.exports = router;
