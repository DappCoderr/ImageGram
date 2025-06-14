import mongoose from "mongoose";

const commentSchema = mongoose.Schema({
  content: {
    type: String,
    required: true,
    minLength: 2,
    maxLength: 20,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  onModel: {
    type: String,
    required: true,
    enum: ["Post", "Comment"],
  },
  commentAbleId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    refPath: "onModel",
  },
  replies: [{ type: mongoose.Schema.Types.ObjectId, ref: "Comment" }],
  likes: [{ type: mongoose.Schema.Types.ObjectId, ref: "Like" }],
});

const Comment = mongoose.model("Comment", commentSchema);

export default Comment;
