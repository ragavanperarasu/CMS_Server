const express = require("express");
const User = require("../../models/User");
const router = express.Router();

router.post("/loginuser", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email: email, password: password });

    if (!user) {
      return res.send('invalid');
    }

    res.send(user);
    
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
});


module.exports = router;
