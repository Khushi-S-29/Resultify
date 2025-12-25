import User from "../models/User.js";
import { generateToken } from "../services/token.service.js";

export const register = async (req, res) => {
  const user = await User.create(req.body);
  const token = generateToken(user);
  res.status(201).json({
    userId: user._id,
    token,
    role: user.role,
  });
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (!user || !(await user.comparePassword(password))) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  const token = generateToken(user);
  res.json({
    userId: user._id,
    token,
    role: user.role,
  });
};
