import { createPost as createPostRepo } from "../repositories/postRepository.js";
import { findAllPost } from "../repositories/postRepository.js";

export const createPostService = async (createPostObj) => {
  try {
    const { caption, image } = createPostObj;
    const post = await createPostRepo(caption, image);
    return post;
  } catch (error) {
    console.log("Something went wrong", error);
    throw error;
  }
};

export const getAllThePost = async () => {
  try {
    const allPost = await findAllPost();
    return allPost;
  } catch (error) {
    console.error("Something went wrong", error);
    throw error;
  }
};
