import express from "express";
import { 
    createUser, 
    loginUser, 
    getUsers, 
    getUserById, 
    updateUser, 
    getUserPdfs // ✅ Add getUserPdfs here
} from "../controllers/userController.js";

const router = express.Router();

// User Routes
router.post("/signup", createUser);
router.post("/login", loginUser);
router.get("/", getUsers);
router.get("/:userId/pdfs", getUserPdfs); // ✅ Route for fetching user PDFs
router.get("/:userId", getUserById);
router.put("/:userId", updateUser);

export default router;
