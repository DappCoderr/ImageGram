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
    // 1. Fetch Parent
    // 2. If parent is not found then throw the error
    // 3. Create new comment
    // 4. add comment to parent
    // 5. save the comment
    // 6. return the comment

    console.log(
      `before fetch parent ${content}, ${onModel} and ${commentAbleId}`
    );

    const parent = await fetchParent(onModel, commentAbleId);
    if (!parent) {
      throw {
        status: 404,
        message: `${onModel} not found`,
      };
    }
    console.log("----------parent------------", parent);
    const newComment = await createComment(
      content,
      userId,
      onModel,
      commentAbleId
    );
    addChildCommentToParent(onModel, newComment, parent);
    return newComment;
  } catch (error) {
    console.log("Something went wrong", error);
    throw error;
  }
};

export const findCommentByIdService = async (id) => {
  try {
    const comment = await findCommentById(id);
    if (!comment) {
      throw {
        status: 404,
        message: "Comment Not Found",
      };
    }
    return comment;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const addChildCommentToParent = async (onModel, comment, parent) => {
  try {
    if (onModel === "Post") {
      parent.comments.push(comment._id);
    } else if (onModel === "Comment") {
      parent.replies.push(comment._id);
    }
    await parent.save();
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const fetchParent = async (onModel, commentAbleId) => {
  try {
    if (onModel === "Post") {
      const post = await findPostById(commentAbleId);
      return post;
    } else {
      const comment = findCommentById(commentAbleId);
      return comment;
    }
  } catch (error) {
    console.log("Something went wrong");
    throw error;
  }
};
