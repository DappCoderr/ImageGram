import express from "express";

const router = express.Router();

router.use("/posts", postRouter);
router.use("/users", userRouter);

export default router;
