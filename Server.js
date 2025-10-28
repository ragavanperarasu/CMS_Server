const express = require("express");
const cors = require("cors");
require("dotenv").config();

const newUserRoutes = require("./routes/user/newUser");
const loginRoutes = require("./routes/user/loginUser");
const forgotPassRoutes = require("./routes/user/forgotPass");

const app = express();

app.use(cors());

app.use(express.json());

app.use(express.static('public'));

app.use("/", newUserRoutes);
app.use("/", loginRoutes);
app.use("/", forgotPassRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on http://localhost:${process.env.PORT}`);
});
