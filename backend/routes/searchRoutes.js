const express = require("express");
const router = express.Router();

const { getSearchResults } = require("../controllers/searchController");
const authMiddleware = require("../middleware/authMiddleware");

// Protected search route - requires a valid JWT token
router.get("/", authMiddleware, getSearchResults);

module.exports = router;