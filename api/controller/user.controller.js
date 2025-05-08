import {
    findUserByEmail,
    createUser,
    validatePassword,
    generateToken,
    getAllUsers as fetchAllUsers,
} from "../services/user.service.js";

// Função para registrar um novo usuário
export const register = async (req, res) => {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
        return res.status(400).json({ message: "Username, email, and password are required" });
    }

    // Validação do formato do email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return res.status(400).json({ message: "Invalid email format" });
    }

    // Validação do comprimento da senha
    if (password.length < 6) {
        return res.status(400).json({ message: "Password must be at least 6 characters long" });
    }

    try {
        // Verifica se o email já está em uso
        const existingUser = await findUserByEmail(email);
        if (existingUser) {
            return res.status(400).json({ message: "Email is already in use" });
        }

        // Cria o novo usuário
        const newUser = await createUser({ username, email, password });
        return res.status(201).json({ message: "User registered successfully", user: newUser });
    } catch (error) {
        console.error("Error registering user", error);
        return res.status(500).json({ message: `Error registering user: ${error.message}` });
    }
};

// Função para login de usuário
export const login = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: "Email and password are required" });
    }

    try {
        // Verifica se o usuário existe
        const user = await findUserByEmail(email);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        // Verifica a senha
        const isPasswordValid = await validatePassword(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: "Invalid credentials" });
        }

        // Gera o token JWT
        const token = generateToken(user._id);
        return res.status(200).json({ message: "Login successful", token });
    } catch (error) {
        console.error("Error logging in", error);
        return res.status(500).json({ message: `Error logging in: ${error.message}` });
    }
};

// Função para listar todos os usuários (apenas para administradores)
export const getAllUsers = async (req, res) => {
    try {
        const users = await fetchAllUsers();
        return res.status(200).json(users);
    } catch (error) {
        console.error("Error fetching users", error);
        return res.status(500).json({ message: `Error fetching users: ${error.message}` });
    }
};