import { createPostService } from "../services/postService.js";

export const createPostController = async (req, res) => {
  try {
    const caption = req.body.caption;
    const image = req.imageUrl;

    const post = await createPostService({ caption, image });

    return res.status(201).json({
      success: true,
      message: "Post Created successfully",
      data: post,
    });
  } catch (error) {
    console.log("Something went wrong", error);
    throw error;
  }
};
