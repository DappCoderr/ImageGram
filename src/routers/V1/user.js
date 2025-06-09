import express from "express";
import { userController } from "../../controller/userController.js";
import { validate } from "../../validation/zodValidation.js";
import { zodSignupSchema } from "../../validation/zodSignupSchema.js";

const router = express.Router();

function dummyGetUserProfile(req, res) {
  return res.status(501).json({ success: false, message: "Failed" });
}

router.get("/", dummyGetUserProfile);

router.post("/signup",validate(zodSignupSchema), userController);

export default router;
