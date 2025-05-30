import express from "express";
import connectDB from "./config/dbConfig.js";
import apiRouter from "./routers/apiRouter.js";

const PORT = 3000;

const app = express();

app.use(express.json());
app.use(express.text());
app.use("/api", apiRouter);

app.listen(PORT, () => {
  console.log("server running on PORT", PORT);
  connectDB();
});
