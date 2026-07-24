const jwt = require("jsonwebtoken");


exports.generateAccessToken = (user) => {
  const payload = {
    id: user._id,
    role: user.role,
  };

  return jwt.sign(
    payload,
    process.env.ACCESS_TOKEN_SECRET,
    {
      expiresIn: "10m",
    }
  );
};


exports.generateRefreshToken = (user) => {
  const payload = {
    id: user._id,
  };

  return jwt.sign(
    payload,
    process.env.REFRESH_TOKEN_SECRET,
    {
      expiresIn: "7d",
    }
  );
};