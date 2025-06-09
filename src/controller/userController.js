import { signupService } from "../services/userService.js";

export const userController = async (req, res) => {
  try {
    console.log("User Controller", req.body);
    const signupInfo = await signupService(req.body);
    console.log("SignUpInfo", signupInfo);
    res.status(201).json({
      success: true,
      message: "User successfully signed-up",
      data: signupInfo,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Create User Fail" });
  }
};
