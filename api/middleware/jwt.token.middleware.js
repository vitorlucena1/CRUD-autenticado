import jwt from "jsonwebtoken";
import User from "../models/User.js";

const verifyToken = async (req, res, next) => {
    const token = req.header("Authorization")?.split(" ")[1];

    if (!token) {
        console.error("Access denied: No token provided");
        return res.status(401).json({ message: "Access denied: No token provided" });
    }

    try {
        const verified = jwt.verify(token, process.env.JWT_SECRET);
        const user = await User.findById(verified.id);

        if (!user) {
            console.error("Unauthorized: User does not exist");
            return res.status(401).json({ message: "Unauthorized: User does not exist" });
        }

        req.user = verified; // Adiciona o ID do usuário ao objeto req
        console.log(`Token verified for user ID: ${req.user.id}`);
        next();
    } catch (error) {
        console.error("Invalid token", error);
        return res.status(403).json({ message: "Invalid token" });
    }
};

export default verifyToken;