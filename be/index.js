import express from "express";
import { default as connectDB } from "./db/connection.js";
const app = express();
import dotenv from "dotenv";
dotenv.config();

const port = process.env.PORT;

app.get("/", (req, res) => {
  console.log(port);
  res.send("Hello World!");
});

connectDB().then(() => {
  app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${port}`);
  });
});
