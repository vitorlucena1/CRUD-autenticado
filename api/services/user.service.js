import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/User.js";

export const findUserByEmail = async (email) => {
    return await User.findOne({ email });
};

export const createUser = async (userData) => {
    const hashedPassword = await bcrypt.hash(userData.password, 10);
    return await User.create({ ...userData, password: hashedPassword });
};

export const validatePassword = async (password, hashedPassword) => {
    return await bcrypt.compare(password, hashedPassword);
};

export const generateToken = (userId) => {
    return jwt.sign({ id: userId }, process.env.JWT_SECRET, { expiresIn: "1h" });
};

export const getAllUsers = async () => {
    return await User.find().select("-password");
};