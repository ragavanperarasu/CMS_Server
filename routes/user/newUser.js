const express = require("express");
const User = require("../../models/User");
const router = express.Router();

router.post("/newuser", async (req, res) => {
  const { username, phoneno, usertype, email, password } = req.body;

  try {
    // 🔍 Check if the email already exists
    const existingUser = await User.findOne({ email: email });

    if (existingUser) {
      // 📩 Email already exists
      return res.send("exists");
    }

    // 🆕 Create a new user
    const newUser = new User({
      username,
      phoneno,
      usertype,
      email,
      password,
    });

    await newUser.save();

    // ✅ Successfully created
    res.send("done");

  } catch (err) {
    console.error(err);
    res.send("error");
  }
});

module.exports = router;
