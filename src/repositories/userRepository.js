import User from "../schema/user.js";

export const findUserByEmail = async (email) => {
  try {
    const user = await User.findOne({ email });
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
