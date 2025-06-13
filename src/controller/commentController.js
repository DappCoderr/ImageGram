import { createCommentService } from "../services/commentService.js";

export const createCommentController = async (req, res) => {
  try {
    const { content, onModel, commentAbleId } = req.body;
    const response = await createCommentService(
      content,
      onModel,
      commentAbleId
    );
    res.status(201).json({
      success: true,
      message: "Comment created successfully",
      data: response,
    });
  } catch (error) {
    console.log("Something went wrong", error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
      data: error,
    });
  }
};
