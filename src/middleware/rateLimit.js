import { rateLimit } from "express-rate-limit";

export const rateLimiter = rateLimit({
  windowMs: 30 * 1000, // 30 seconds,
  limit: 5, // each IP can send 5 request per WindowMs
});
