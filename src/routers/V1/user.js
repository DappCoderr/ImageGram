import express from "express";
import {
  signInController,
  signUpController,
} from "../../controller/userController.js";
import { validate } from "../../validation/zodValidation.js";
import { zodSignupSchema } from "../../validation/zodSignupSchema.js";

const router = express.Router();

function dummyGetUserProfile(req, res) {
  return res.status(501).json({ success: false, message: "Failed" });
}

router.get("/", dummyGetUserProfile);

/**
 * @openapi
 * /signup:
 *   post:
 *     tags:
 *       - Auth
 *     summary: User signup
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: User signed up successfully
 */

router.post("/signup", validate(zodSignupSchema), signUpController);
router.post("/signin", signInController);

export default router;
