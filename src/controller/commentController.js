import { createCommentService } from "../services/commentService.js";

export const createCommentController = async (req, res) => {
  try {
    const commentInfo = req.body;
    const id = req.params.id;
    const data = await createCommentService(id, commentInfo);
    res.status(201).json({
      success: true,
      message: "Comment created successfully",
      data: data,
    });
  } catch (error) {
    console.log("Something went wrong", error);
    res.status(501).json({
      success: false,
      message: "Comment creation failed",
      data: error,
    });
  }
};
