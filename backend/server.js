const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");

const { notFound, errorHandler } = require("./middleware/errorMiddleware");

const app = express();

dotenv.config();
connectDB();
app.use(express.json());
app.use(cors());

app.use(
  cors({
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
    optionsSuccessStatus: 204,
  })
);

app.use("/api/user", userRoutes);

app.use(notFound);
app.use(errorHandler);

const PORT = 3001;
const server = app.listen(PORT, console.log(`Server running at ${PORT}`));
