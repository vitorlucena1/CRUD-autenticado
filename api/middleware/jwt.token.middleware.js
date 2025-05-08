import jwt from "jsonwebtoken";

const verifyToken = (req, res, next) => {
    const token = req.header("Authorization")?.split(" ")[1];

    if (!token) {
        console.error("Access denied: No token provided");
        return res.status(401).json({ message: "Access denied: No token provided" });
    }

    try {
        const verified = jwt.verify(token, process.env.JWT_SECRET);
        req.user = verified; // Adiciona o ID do usuário ao objeto req
        console.log(`Token verified for user ID: ${req.user.id}`);
        next();
    } catch (error) {
        console.error("Invalid token", error);
        return res.status(403).json({ message: "Invalid token" });
    }
};

export default verifyToken;