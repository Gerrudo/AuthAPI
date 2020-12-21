const express = require("express");
const bodyParser = require("body-parser");
const InitiateMongoServer = require("./config/db");
const user = require("./routes/user");

InitiateMongoServer();

const app = express();

// PORT
const PORT = process.env.PORT || 4000;

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.json({ message: "API Working" });
});

app.use("/user", user);

app.listen(PORT, (req, res) => {
  console.log(`Server Started on PORT ${PORT}`);
});