const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const path = require("path");
const userRoutes = require("./routes/userRoutes");

const { notFound, errorHandler } = require("./middleware/errorMiddleware");

const app = express();

dotenv.config();
connectDB();
app.use(express.json());

app.use("/api/user", userRoutes);

app.use(notFound);
app.use(errorHandler);

const PORT = 3001;
const server = app.listen(PORT, console.log(`Server running at ${PORT}`));
