
import * as jwt from "jsonwebtoken";

export function generateToken(email: string, password: string, jwtSecret: string) {
    const token = jwt.sign({
        email: email,
        password: password
      }, jwtSecret, {
        expiresIn: "1h",
      });
    console.log(token)
    return token;
}