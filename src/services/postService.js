import {
  countAllPost,
  findAllPost,
  createPost as createPostRepo,
  deletePostById,
  updatePostById,
} from "../repositories/postRepository.js";

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

export const getAllPostService = async (offset, limit) => {
  try {
    const allPost = await findAllPost(offset, limit);
    const totalPostsCount = await countAllPost();
    const totalPages = Math.ceil(totalPostsCount / limit);
    return { allPost, totalPostsCount, totalPages };
  } catch (error) {
    console.error("Something went wrong", error);
    throw error;
  }
};

export const deletePostService = async (id) => {
  try {
    const deletePost = await deletePostById(id);
    return deletePost;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const updatePostService = async (id, upOj) => {
  try {
    const updatePost = await updatePostById(id, upOj);
    return updatePost;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
