import Comment from "../schema/comment.js";

export const createComment = async (
  content,
  userId,
  onModel,
  commentAbleId
) => {
  try {
    const newComment = await Comment.create({
      content,
      user: userId,
      onModel,
      commentAbleId,
      replies: [],
      likes: [],
    });
    return newComment;
  } catch (error) {
    console.error("Something went wrong while creating comment:", error);
    throw error;
  }
};

export const findCommentById = async (id) => {
  try {
    const comment = await Comment.findById(id);
    return comment;
  } catch (error) {
    console.log("Something went wrong while fetching comments", error);
    throw error;
  }
};
