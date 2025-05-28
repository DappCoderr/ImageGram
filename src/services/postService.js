import { createPost as createPostRepo } from "../repositories/postRepository.js";

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
