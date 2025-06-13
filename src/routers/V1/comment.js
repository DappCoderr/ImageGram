import express from "express";
import {
  createCommentController,
  getCommentById,
} from "../../controller/commentController.js";
import { isAuthenticated } from "../../middleware/authMiddleware.js";

const router = express.Router();

router.get("/:id", getCommentById);
router.post("/createComment", isAuthenticated, createCommentController);

export default router;
