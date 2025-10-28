const express = require("express");
const User = require("../../models/User");
const router = express.Router();

router.post("/forgotpass", async (req, res) => {
  try {
    const { email } = req.body;

    const user = await User.findOne({ email });

    if (!user) return res.send("invalid");

    res.send("done");
  } catch (err) {
    res.status(500).send("Server error");
  }
});

module.exports = router;
