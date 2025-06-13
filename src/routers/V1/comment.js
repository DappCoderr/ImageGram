import express from "express";
import { createCommentController } from "../../controller/commentController.js";

const router = express.Router();

router.post("/:id", createCommentController);

export default router;
