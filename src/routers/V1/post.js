import express from "express";
import {
  createPostController,
  deletePost,
  getAllThePost,
  updatePost,
} from "../../controller/postController.js";
import { uploadToCloudinary } from "../../config/cloudinaryConfig.js";
import { upload } from "../../config/multerConfig.js";
import { validate } from "../../validation/zodValidation.js";
import { zodPostSchema } from "../../validation/zodPostSchema.js";

const router = express.Router();

router.get("/", getAllThePost);
router.post(
  "/",
  upload.single("image"),
  uploadToCloudinary,
  validate(zodPostSchema),
  createPostController
);
router.delete("/:id", deletePost);
router.put("/:id", updatePost);

export default router;
