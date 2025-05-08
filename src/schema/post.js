import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
  caption: {
    type: String,
    required: true,
    minLength: 5,
  },
  likes: { type: Number, default: 0 },
  image: { type: String, required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

const posts = mongoose.model("Post", postSchema);

export default posts;
