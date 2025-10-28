const express = require("express");
const User = require("../../models/User");
const router = express.Router();

router.post("/newuser", async (req, res) => {
  const { username, phoneno, usertype, email, password } = req.body;

  try {
    const newUser = new User({
      username: username,
      phoneno: phoneno,
      usertype: usertype,
      email: email,
      password: password,
    });

    await newUser.save();

    res.send("done");

  } catch (err) {
    res.status(500).send("Error saving user");
  }
});


module.exports = router;