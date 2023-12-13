import { Express, Request, Response } from "express";
import jwt from "jsonwebtoken";


const secret: string = '12345';

const authMiddleware = (req: Request, res: Response, next: () => void) => {
  console.log(req.headers.authorization)
  const token = req.headers.authorization;

  if (!token) {
    res.status(401).send("Token não encontrado");
    return;
  }

  
  try {
    const payload = jwt.verify(token, secret);
  } catch (error) {
    res.status(401).send("Token inválido");
    return;
  }

  // Continua a solicitação
  next();
};

export default authMiddleware;