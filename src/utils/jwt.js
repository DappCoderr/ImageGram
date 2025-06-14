import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../config/serverConfig.js";

export const generateJWTToken = (payload) => {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: "1d" });
};

export const verifyJwt = (token) => {
  return jwt.verify(token, JWT_SECRET);
};
