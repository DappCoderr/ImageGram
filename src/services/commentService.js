import {
  createComment,
  findCommentById,
} from "../repositories/commentRepository.js";
import { findPostById } from "../repositories/postRepository.js";

export const createCommentService = async (
  content,
  userId,
  onModel,
  commentAbleId
) => {
  try {
    if (onModel === "Post") {
      const post = await findPostById(commentAbleId);
      if (!post) {
        throw {
          status: 404,
          message: "Post Not Found",
        };
      }
      const newComment = await createComment(
        content,
        userId,
        onModel,
        commentAbleId
      );
      post.replies.push(newComment._id);
      await post.save();
      return newComment;
    } else {
      const parentcomment = await findCommentById(commentAbleId);
      if (!parentcomment) {
        throw {
          status: 404,
          message: "Comment Not Found",
        };
      }
      const newComment = await createComment(
        content,
        userId,
        onModel,
        commentAbleId
      );
      parentcomment.replies.push(newComment._id);
      await parentcomment.save();
      return newComment;
    }
  } catch (error) {
    console.log("Something went wrong", error);
    throw error;
  }
};
