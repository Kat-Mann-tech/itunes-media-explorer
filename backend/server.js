// import packages
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const searchRoutes = require("./routes/searchRoutes");
const authRoutes = require("./routes/authRoutes");

// load environment variables
dotenv.config();

// create express app
const app = express();

// middleware
app.use(cors());
app.use(express.json());

app.use("/api/search", searchRoutes);
app.use("/api", authRoutes);

// test route
app.get("/", (req, res) => {
  res.json({ message: "Server is running" });
});

// port
const PORT = process.env.PORT || 5000;

// start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});