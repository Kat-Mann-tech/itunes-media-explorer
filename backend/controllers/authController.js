const jwt = require("jsonwebtoken");

// Generate a JWT token for authorised API access
const getToken = (req, res) => {
  
  // Create a token containing basic app information
  const token = jwt.sign(
    {
      app: "iTunes Search App",
    },

    // Sign the token using the secret key stored in the .env file
    process.env.JWT_SECRET,

    // Token will expire after 1 hour
    {
      expiresIn: "1h",
    }
  );

  // Return the generated token as JSON
  res.json({ token });
};

// Export the controller function for use in routes
module.exports = {
  getToken,
};