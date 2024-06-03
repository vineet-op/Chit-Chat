const jwt = require("jsonwebtoken");
const User = require("../Models/userModel");

const protect = async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];
      const decoded = jwt.verify(token, process.env.jwt_secret);
      req.user = await User.findById(decoded.id).select("-password");
      next();
    } catch (error) {
      res.status(401);
      throw ("New Error", error);
    }
  }

  if (!token) {
    res.status(401).json({ message: "Un-Authorized" });
  }
};

module.exports = { protect };
