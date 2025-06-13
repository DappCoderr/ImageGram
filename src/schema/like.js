import mongoose from "mongoose";

const likeSchema = mongoose.Schema({
  onModel: {
    type: String,
    required: true,
    enum: ["Post", "Comment"],
  },
  likableId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    refPath: "onModel",
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
});

const Like = mongoose.model("Likes", likeSchema);

export default Like;
