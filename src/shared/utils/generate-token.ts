
import * as jwt from "jsonwebtoken";

export function generateToken(document: string, email: string, jwtSecret: string) {
  const now = Date.now();
    const token = jwt.sign({
        document: document,
        email: email,
        date: now,
      }, jwtSecret, {
        expiresIn: "1h",
      });
      
    return token;
}