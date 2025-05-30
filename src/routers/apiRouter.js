import express from "express";
import v1Router from "./V1/v1Router.js";
// import v2Router from

const router = express.Router();

router.use("/v1", v1Router);
// router.use("/v2", v2Router);

export default router;
