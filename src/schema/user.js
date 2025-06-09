import mongoose from "mongoose";
import bcrypt from "bcrypt";

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
      type: String,
      required: true,
      minLength: 5,
    },
  },
  { timestamps: true }
);

userSchema.pre("save", function modifyPassword(next) {
  const user = this;
  const SALT = bcrypt.genSaltSync(9);
  const hashPassword = bcrypt.hashSync(user.password, SALT);
  user.password = hashPassword; 
  next();
});

// This line create the collection
const User = mongoose.model("User", userSchema);

export default User;
