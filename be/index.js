const express = require("express");
const app = express();
require("dotenv").config();

const port = process.env.PORT;

app.get("/", (req, res) => {
  console.log(port);
  res.send("Hello World!");
});

app.listen(process.env.PORT, () => {
  console.log(process.env.PORT);
  console.log(`Example app listening on port ${port}`);
});
