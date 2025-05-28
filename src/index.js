import express from "express";
import connectDB from "./config/dbConfig.js";
import { upload } from "./config/multerConfig.js";
import { uploadToCloudinary } from "./config/cloudinaryConfig.js";
import { createPostController } from "./controller/postController.js";

const PORT = 3000;

const app = express();

app.use(express.json());
app.use(express.text());

app.get("/", (req, res) => {
  res.json({ message: "Home" });
});

app.get("/about", (req, res) => {
  res.json({ message: "About" });
});

app.get("/contact", (req, res) => {
  res.json({ message: "You are on contact page" });
});

app.post(
  "/post",
  upload.single("image"),
  uploadToCloudinary,
  createPostController
);

app.listen(PORT, () => {
  console.log("server running on PORT", PORT);
  connectDB();
});
