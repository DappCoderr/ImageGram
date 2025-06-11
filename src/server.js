import express from "express";
import connectDB from "./config/dbConfig.js";
import apiRouter from "./routers/apiRouter.js";
import { isAuthenticated } from "./middleware/authMiddleware.js";

const PORT = 3000;

const app = express();
// const upload = multer();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));
// app.use(express.text());
// app.use(upload());

app.get("/ping", isAuthenticated, (req, res) => {
  console.log("Request Body", req.body);
  console.log("Request user", req.user);
  res.json({ message: "Pong", user: req.user });
});

app.use("/api", apiRouter);

app.listen(PORT, () => {
  console.log("server running on PORT", PORT);
  connectDB();
});
