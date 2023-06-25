const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const app = express();

dotenv.config();

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true,
  })
  .then(console.log("Connected to MongoDB"))
  .catch((error) => console.log(error));

app.use("/", (req, res) => {
  console.log("This is your main URL");
});

app.listen("5000", () => {
  console.log("Backend runnig in port 5000");
});
