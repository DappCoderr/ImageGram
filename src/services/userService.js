import bcrypt from "bcrypt";
import { createUser, findUserByEmail } from "../repositories/userRepository.js";
import { generateJWTToken } from "../utils/jwt.js";

export const signupService = async (userObj) => {
  try {
    const name = userObj.name;
    const email = userObj.email;
    const password = userObj.password;

    const newUser = await createUser(name, email, password);

    return newUser;
  } catch (error) {
    if (error.name === "MongoServerError" && error.code === 11000) {
      throw {
        status: 400,
        message: "User with the same email and password exists",
      };
    }
    throw error;
  }
};

export const signInService = async (userObject) => {
  try {
    const user = await findUserByEmail(userObject.email);
    if (!user) {
      throw {
        status: 404,
        message: "User Not Found",
      };
    }
    const isPasswordValid = bcrypt.compareSync(
      userObject.password,
      user.password
    );
    if (!isPasswordValid) {
      throw {
        status: 404,
        message: "In Valid Password",
      };
    }

    const token = generateJWTToken({
      email: user.email,
      _id: user._id,
      role: user.role || "user",
    });

    return token;
  } catch (error) {
    throw error;
  }
};

export const checkIfUserExists = async (email) => {
  try {
    const user = await findUserByEmail(email);
    return user;
  } catch (error) {
    throw error;
  }
};
