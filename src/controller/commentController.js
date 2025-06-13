import {
  createCommentService,
  findCommentByIdService,
} from "../services/commentService.js";

export const createCommentController = async (req, res) => {
  try {
    const { content, onModel, commentAbleId } = req.body;
    const userId = req.user;
    console.log("-------------response---------", req.body);
    console.log("-------------req.user---------", userId);
    const response = await createCommentService(
      content,
      userId,
      onModel,
      commentAbleId
    );
    console.log("-------------response---------", response);
    return res.status(201).json({
      success: true,
      message: "Comment created successfully",
      data: response,
    });
  } catch (error) {
    console.log("Something went wrong", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
      data: error,
    });
  }
};

export const getCommentById = async (req, res) => {
  try {
    const commentId = req.params.id;
    const response = await findCommentByIdService(commentId);
    if (!response) {
      throw {
        status: 404,
        message: "Comment Not Found",
      };
    }
    return res.status(201).json({
      success: true,
      message: "Comment Fetched Successfully",
      data: response,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};
