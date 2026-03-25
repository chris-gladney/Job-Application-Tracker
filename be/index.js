import express from "express";
import connectDB from "./db/connection.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();

const port = process.env.PORT;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

connectDB().then(() => {
  app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${port}`);
  });
});
