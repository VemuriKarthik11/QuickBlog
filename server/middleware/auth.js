import jwt from "jsonwebtoken";

const auth = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ success: false, message: "Missing token" });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // optional: if you want to use the user info later
    next();
  } catch (error) {
    return res.status(403).json({ success: false, message: "Invalid token" });
  }
};

export default auth;
