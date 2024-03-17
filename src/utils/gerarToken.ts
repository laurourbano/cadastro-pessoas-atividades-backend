const jwt = require("jsonwebtoken");

const gerarToken = (userId: number): string => {
  const payload = { userId };
  const secret = process.env.JWT_SECRET;
  return jwt.sign(payload, secret!, { expiresIn: "1h" }); // Token expires in 1 hour
};

export default gerarToken;
