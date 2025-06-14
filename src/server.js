import express from "express";
import connectDB from "./config/dbConfig.js";
import apiRouter from "./routers/apiRouter.js";
import { isAuthenticated } from "./middleware/authMiddleware.js";
import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import { options } from "./utils/swaggerOptions.js";
import ip from "ip";
import { rateLimiter } from "./middleware/rateLimit.js";

const PORT = 3000;

const swaggerDocs = swaggerJsdoc(options);

const app = express();

// applied rate limiter to all the request
app.use(rateLimiter);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", apiRouter);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.get("/ping", isAuthenticated, (req, res) => {
  console.log("Request Body", req.body);
  console.log("Request user", req.user);
  res.json({ message: "Pong", user: req.user });
});

app.listen(PORT, () => {
  console.log("server running on PORT", PORT);
  connectDB();
});
