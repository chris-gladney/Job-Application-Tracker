const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  const token = req.header("Authorization")?.split(" ")[1];

  if (!token) {
    return res
      .status(401)
      .json({ message: "No token provided. Access denied" });
  }

  try {
    // Check token against expected
  } catch (err) {
    return res.status(400).json({ message: "Invalid token" });
  }
};
