import { verifyJwt } from "../utils/jwt.js";
import { checkIfUserExists } from "../services/userService.js";

export const isAuthenticated = async (req, res, next) => {
  const token = req.headers["x-access-token"];

  if (!token) {
    return res.status(400).json({
      success: false,
      message: "Token is required",
    });
  }

  try {
    const response = verifyJwt(token);
    const doesUserExist = await checkIfUserExists(response.email);
    if (!doesUserExist) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }
    console.log("---------JWTRes--------", response);
    req.user = response;
    next();
  } catch (error) {}
};
