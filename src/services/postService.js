import {
  countAllPost,
  findAllPost,
  createPost as createPostRepo,
  deletePostById,
  updatePostById,
  findPostById,
} from "../repositories/postRepository.js";

export const createPostService = async (createPostObj) => {
  try {
    const { caption, image, userId } = createPostObj;
    const post = await createPostRepo(caption, image, userId);
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

export const deletePostService = async (id, user) => {
  try {
    const post = await findPostById(id);
    if (post.userID._id != user) {
      throw {
        status: 401,
        message: "Unauthorize user",
      };
    }
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
