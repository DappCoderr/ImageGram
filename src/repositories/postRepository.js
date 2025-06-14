import Post from "../schema/post.js";

export const createPost = async (caption, image, userID) => {
  try {
    const newPost = await Post.create({ caption, image, userID });
    return newPost;
  } catch (error) {
    console.log(error);
  }
};

export const countAllPost = async () => {
  try {
    const count = await Post.countDocuments();
    return count;
  } catch (error) {
    console.log(error);
  }
};

export const findAllPost = async (offset, limit) => {
  try {
    const posts = await Post.find().populate("userID", "userName email")
      .sort({ createdAt: -1 })
      .skip(offset)
      .limit(limit);
    return posts;
  } catch (error) {
    console.log(error);
  }
};

export const findPostById = async (id) => {
  try {
    const post = await Post.findById(id);
    return post;
  } catch (error) {
    console.log(error);
  }
};

export const deletePostById = async (id) => {
  try {
    const post = await Post.findByIdAndDelete(id);
    return post;
  } catch (error) {
    console.log(error);
  }
};

export const updatePostById = async (id, updateObj) => {
  try {
    const post = await Post.findByIdAndUpdate(id, updateObj, { new: true });
    return post;
  } catch (error) {
    console.log(error);
  }
};
