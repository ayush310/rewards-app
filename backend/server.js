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

// ---------Deployment------------
const __dirname1 = path.resolve();
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname1, "/frontend/build")));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname1, "frontend", "build", "index.html"));
  });
} else {
  app.get("/", (req, res) => {
    res.send("API is running");
  });
}

// ---------Deployment------------

app.use(notFound);
app.use(errorHandler);

const PORT = 3001;
const server = app.listen(PORT, console.log(`Server running at ${PORT}`));
