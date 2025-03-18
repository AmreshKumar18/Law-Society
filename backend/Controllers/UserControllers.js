import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { Users } from "../Models/UserModel.js";

export const newUser = async (req, res) => {
  try {
    const { fullname, email, password } = req.body;
    let user = await Users.findOne({ email });
    if (user) {
      res.status(409).json({ message: "User Already Registered" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);

    user = {
      fullname,
      email,
      password: hashedPassword,
    };

    const activationToken = jwt.sign({ user }, process.env.ACTIVATION_SECRET, {
      expiresIn: "60000s",
    });

    await Users.create(user);

    return res.status(200).json({
      message: "User created successfully",
      token: activationToken,
    });
  } catch (error) {
    console.error("Error creating user:", error);

    // Make sure to send only one response
    if (!res.headersSent) {
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
};

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await Users.findOne({ email });
    if (!user) {
      return res.status(404).json({
        message: "No User With this email",
      });
    }
    const matchPassword = await bcrypt.compare(password, user.password);

    if (!matchPassword) {
      return res.status(400).json({
        message: "Wrong Password...",
      });
    }
    const token = jwt.sign({ _id: user._id }, process.env.Jwt_sec, {
      expiresIn: "1d",
    });
    return res.status(200).json({
      message: `Welcome back ${user.fullname}`,
      token,
      user,
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
