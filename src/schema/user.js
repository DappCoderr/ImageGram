import mongoose from "mongoose";

const scheme = new mongoose.Schema(
  {
    userName: {
      type: String,
      required: true,
      unique: true,
      minLength: 5,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      minLength: 5,
      validate: {
        validator: function (emailValue) {
          return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
            emailValue
          );
        },
        message: "Invalid email format",
      },
    },
    password: {
      type: string,
      required: true,
      minLength: 5,
    },
  },
  { timestamps: true }
);

const user = mongoose.model("user", scheme);

export default user;
