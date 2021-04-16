require('dotenv').config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const passport = require("passport");
const usersRouter = require("./routes/users");


const app = express();


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Database connection setup
mongoose
  .connect(`${process.env.MONGODB_URL}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then((res) => console.log("Connected to Database"))
  .catch((err) => console.log("Connection failed", err));



// Passport config
app.use(passport.initialize());
require("./config/passport")(passport);

// Routes configuration
app.use("/api/user/", usersRouter);



app.listen(5000, (err) => {
  if (err) {
    throw err;
  }
  console.log("Server running on 5000");
});
