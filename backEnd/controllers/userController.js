import bcrypt from "bcrypt";
import Pdf from "../models/pdf.js";  // Assuming Pet model contains PDFs related to the user
import User from "../models/user.js";  // Assuming User model is set up correctly

// Signup
export const createUser = async (req, res) => {
  try {
    const { name, username, password, email } = req.body;

    // Check if the username already exists
    const existingUser = await User.findOne({ where: { username } });
    if (existingUser)
      return res.status(400).json({ error: "Username already exists" });

    // Hash the password before saving it
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      name,
      username,
      password: hashedPassword,
      email,
    });

    res.status(200).json({ message: "User created successfully", user });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Login
export const loginUser = async (req, res) => {
  try {
    const { username, password } = req.body;

    // Check if the user exists
    const user = await User.findOne({ where: { username } });
    if (!user)
      return res.status(400).json({ error: "Invalid username or password" });

    // Compare the entered password with the hashed password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(400).json({ error: "Invalid username or password" });

    res.status(200).json({ message: "Login successful", user });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get All Users
export const getUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get User Details
export const getUserById = async (req, res) => {
  try {
    const { userId } = req.params;
    const user = await User.findByPk(userId, {
      include: Pdf, // Assuming Pet is a model that holds PDFs related to the user
    });

    if (!user) return res.status(404).json({ error: "User not found" });

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update User
export const updateUser = async (req, res) => {
  try {
    const { userId } = req.params;
    const { name, username, email } = req.body;

    // Find the user by primary key (ID)
    const user = await User.findByPk(userId);
    if (!user) return res.status(404).json({ error: "User not found" });

    // Update user fields with provided values or keep existing ones
    user.name = name || user.name;
    user.username = username || user.username;
    user.email = email || user.email; // Fixed 'phone' to 'email'

    await user.save(); // Save updated user details

    res.status(200).json({ message: "User updated successfully", user });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get User PDFs (New function to get PDFs related to a user)
export const getUserPdfs = async (req, res) => {
  try {
    const { userId } = req.params;
    const user = await User.findByPk(userId, {
      include: Pdf, // Assuming Pet has PDFs related to the user
    });

    if (!user) return res.status(404).json({ error: "User not found" });

    // Assuming Pet has a relation with PDFs, returning the PDFs
    res.status(200).json(user.Pets); // Adjust this according to your actual data structure
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
