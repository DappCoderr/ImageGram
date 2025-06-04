import { signupService } from "../services/userService.js";

export const userController = async (req, res) => {
  try {
    const signupData = req.body;
    const signupInfo = signupService(
      signupData.name,
      signupData.email,
      signupData.password
    );
    res.status(201).json({
      success: true,
      message: "User successfully signed-up",
      data: signupInfo,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Create User Fail" });
  }
};
