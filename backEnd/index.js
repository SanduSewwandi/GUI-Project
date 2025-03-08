import express from "express";
import dotenv from "dotenv";
import sequelize from "./config/database.js";
import userRoutes from "./routes/userRoutes.js";
import pdfRoutes from "./routes/pdfRoutes.js";
import cors from "cors";

// Load environment variables
dotenv.config();

const app = express();

// Enable CORS for the frontend
app.use(
  cors({
    origin: "http://localhost:5173", // Change this if using a different frontend address
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// Middleware to parse incoming JSON requests
app.use(express.json());

// Use routes
app.use("/users", userRoutes);
app.use("/pdfs", pdfRoutes);



// Start Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, async () => {
  try {
    await sequelize.authenticate();
    console.log("Database connected!");
    await sequelize.sync({ force: false });
  } catch (error) {
    console.error("Unable to connect to database:", error);
  }
  console.log(`Server running on http://localhost:${PORT}`);
});
