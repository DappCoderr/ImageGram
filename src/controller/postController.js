import {
  createPostService,
  deletePostService,
  getAllPostService,
  updatePostService,
} from "../services/postService.js";

export const createPostController = async (req, res) => {
  try {
    console.log("controller", req.body);
    const caption = req.body.caption;
    const image = req.imageUrl;
    const userId = req.user._id;

    console.log("-------userId---------", userId);

    const post = await createPostService({ caption, image, userId });

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

export const getAllThePost = async (req, res) => {
  try {
    const offset = req.query.offset || 0;
    const limit = req.query.limit || 10;
    const paginatedPosts = await getAllPostService(offset, limit);
    return res.status(200).json({ success: true, message: paginatedPosts });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: "Internal Server Error" });
  }
};

export const deletePost = async (req, res) => {
  try {
    const id = req.params.id;
    const response = await deletePostService(id, req.user._id);
    if (!response) {
      return res.status(404).json({
        success: false,
        message: "Post Not Found",
      });
    }
    return res.status(200).json({
      success: true,
      message: "Post Deleted Successfully",
      data: response,
    });
  } catch (error) {
    console.log(error);
    if (error.status) {
      return res.status(error.status).json({
        success: false,
        message: error.message,
      });
    }
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

export const updatePost = async (req, res) => {
  try {
    const updateObject = req.body;
    console.log(updateObject);
    const response = await updatePostService(req.params.id, updateObject);
    res.status(200).json({ success: true, message: response });
  } catch (error) {
    console.log(error);
    res.status(501).json({ success: false, message: "Update Fail" });
  }
};
