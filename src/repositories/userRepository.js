import User from "../schema/user";

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
