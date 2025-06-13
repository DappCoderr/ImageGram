import { signInService, signupService } from "../services/userService.js";

export const signUpController = async (req, res) => {
  try {
    console.log("User Controller", req.body);
    const signupInfo = await signupService(req.body);
    return res.status(201).json({
      success: true,
      message: "User successfully signed-up",
      data: signupInfo,
    });
  } catch (error) {
    console.log(error);
    if (error.status) {
      return res.status(error.status).json({
        success: false,
        message: error.message,
      });
    }
    return res
      .status(500)
      .json({ success: false, message: "Create User Fail" });
  }
};

export const signInController = async (req, res) => {
  try {
    const signupInfo = await signInService(req.body);
    return res.status(201).json({
      success: true,
      message: "User successfully signed-in",
      data: signupInfo,
    });
  } catch (error) {
    console.log(error);
    if (error.status) {
      return res.status(error.status).json({
        success: false,
        message: error.message,
      });
    }
    return res
      .status(500)
      .json({ success: false, message: "Create User Fail" });
  }
};
