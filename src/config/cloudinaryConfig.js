import { v2 as cloudinary } from "cloudinary";
import {
  CLOUDINARY_CLOUD_NAME,
  CLOUDINARY_API_KEY,
  CLOUDINARY_API_SECRET,
} from "./serverConfig.js";
import fs from "fs";

cloudinary.config({
  cloud_name: CLOUDINARY_CLOUD_NAME,
  api_key: CLOUDINARY_API_KEY,
  api_secret: CLOUDINARY_API_SECRET,
});

export const uploadToCloudinary = async (req, res, next) => {
  try {
    const localPath = req.file.path;

    const result = await cloudinary.uploader.upload(localPath);

    // Cleanup local file
    fs.unlinkSync(localPath);

    req.imageUrl = result.secure_url;
    next(); // go to controller
  } catch (error) {
    console.error("Error uploading to Cloudinary:", error);
    return res.status(500).json({ error: "Image upload failed" });
  }
};
