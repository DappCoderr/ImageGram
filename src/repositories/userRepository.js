import { email } from "zod/v4";
import User from "../schema/user.js";

export const findUserByEmailId = async (mailId) => {
  try {
    const user = await User.findOne({ mailId });
    return user;
  } catch (error) {
    console.log(error);
  }
};

export const findAllUser = async () => {
  try {
    const users = await User.find();
    return users;
  } catch (error) {
    console.log(error);
  }
};

export const createUser = async (userName, email, password) => {
  try {
    const newUser = await User.create({
      userName,
      email,
      password,
    });
    return newUser;
  } catch (error) {
    console.log("Something went wrong", error);
    throw error;
  }
};
