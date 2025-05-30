import express from "express";
import {
  createPostController,
  getAllThePost,
} from "../../controller/postController.js";
import { uploadToCloudinary } from "../../config/cloudinaryConfig.js";
import { upload } from "../../config/multerConfig.js";

const router = express.Router();

router.post(
  "/",
  upload.single("image"),
  uploadToCloudinary,
  createPostController
);

router.get("/", getAllThePost);

export default router;
