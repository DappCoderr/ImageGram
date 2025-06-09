import { createUser } from "../repositories/userRepository.js";

export const signupService = async (userObj) => {
  try {
    const name = userObj.name;
    const email = userObj.email;
    const password = userObj.password;
    const newUser = await createUser(name, email, password);
    return newUser;
  } catch (error) {
    console.error("Something went wrong", error);
    throw error;
  }
};
