import express from "express";

const router = express.Router();

function dummyGetUserProfile(req, res) {
  return res.status(501).json({ success: false, message: "Failed" });
}

router.get("/", dummyGetUserProfile);

export default router;
