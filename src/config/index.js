import express from "express";
import connectDB from "./dbConfig.js";

const PORT = 3000;

const app = express();

app.get("/", (req, res) => {
  res.json({ message: "Home" });
});

app.get("/about", (req, res) => {
  res.json({ message: "About" });
});

app.get("/contact", (req, res) => {
  res.json({ message: "You are on contact page" });
});

app.listen(PORT, () => {
  console.log("server running on PORT", PORT);
  connectDB();
});
