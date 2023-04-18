import jsonwebtoken from "jsonwebtoken";

export const auth = (req, res, next) => {
  const token = req.header(`token`);

  // Check for token
  if (!token) {
    return res.status(401).json({
      message: "No token, authorization denied.",
    });
  }

  try {
    // Verify token
    const decrypted = jsonwebtoken.verify(token, process.env.SECRET_KEY);

    // Add user from payload
    req.user = decrypted;
    next();
  } catch (e) {
    return res.status(400).json({ message: "Token invalid" });
  }
};
