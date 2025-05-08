import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
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

// This line create the collection
const user = mongoose.model("User", userSchema);

export default user;
