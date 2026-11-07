const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  // Get token from the request header
  const authHeader = req.headers.authorization;

  // Check if a token was provided
  if (!authHeader) {
    return res.status(401).json({
      message: "Access denied. No token provided.",
    });
  }

  // Extract the token from 'Bearer TOKEN'
  const token = authHeader.split(" ")[1];

  try {
    // Verify the token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Store decoded token data on the request
    req.user = decoded;

    // Continue to the next function
    next();
  } catch (error) {
    return res.status(403).json({
      message: "Invalid token",
    });
  }
};

module.exports = authMiddleware;