const jwt = require("jsonwebtoken");
require("dotenv");

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.jwt_secret, {
    expiresIn: "30d",
  });
};

module.exports = generateToken;
