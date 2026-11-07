const express = require("express");
const router = express.Router();

const { getToken } = require("../controllers/authController");

// Generate a JWT token that can be used to access protected routes
router.get("/token", getToken);

module.exports = router;