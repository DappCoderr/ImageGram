import { createUser } from "../repositories/userRepository.js";

export const signupService = async (userObj) => {
  try {
    const { uName, uEmail, uPassword } = userObj;
    const newUser = await createUser(uName, uEmail, uPassword);
    return newUser;
  } catch (error) {
    console.error("Something went wrong", error);
    throw error;
  }
};
