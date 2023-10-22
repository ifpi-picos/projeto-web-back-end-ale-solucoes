import * as jwt from "jsonwebtoken";

export function isTokenExpired(jwtSecret: string, token: string) {
  try {
    const decoded = jwt.verify(token, jwtSecret)
    
    return decoded;
  } catch (error) {
    throw new Error('Token inválido, tente novamente!');
  }
}
