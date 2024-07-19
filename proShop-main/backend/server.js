import express from "express";
import dotenv from "dotenv";
import productRoutes from "./routes/productRoutes.js";
dotenv.config();
import connectDB from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import cookieParser from "cookie-parser";
const port = process.env.port || 5000;
connectDB();
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(notFound);
app.use(errorHandler);
app.use(cookieParser());
app.get("/", (req, res) => res.send("api is running"));

app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);

app.listen(port, () =>
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${port}`)
);
