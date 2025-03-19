// backend/middlewares/authMiddleware.js

const jwt = require("jsonwebtoken");

function authenticateJWT(req, res, next) {
  const token = req.header("Authorization")?.replace("Bearer ", "");

  if (!token) {
    return res.status(403).json({ error: "Access Denied" });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ error: "Invalid Token" });
    }

    req.user = user; // Attach the decoded user to the request object
    next(); // Proceed to the next middleware/route handler
  });
}

module.exports = authenticateJWT;
