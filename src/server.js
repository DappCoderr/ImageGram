import express from "express";
import connectDB from "./config/dbConfig.js";
import apiRouter from "./routers/apiRouter.js";
import multer from "multer";

const PORT = 3000;

const app = express();
// const upload = multer();

app.use(express.json());
app.use(express.text());
// app.use(upload());
app.use("/api", apiRouter);

app.listen(PORT, () => {
  console.log("server running on PORT", PORT);
  connectDB();
});
