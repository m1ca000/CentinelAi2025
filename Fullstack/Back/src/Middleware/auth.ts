import dotenv from 'dotenv';
dotenv.config();
import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';

// Extend Express Request interface to include email and institutionID
declare global {
  namespace Express {
    interface Request {
      email?: string;
      institutionID?: string;
    }
  }
}

export const verifyToken = async (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers['authorization'];
  if (!authHeader) {
    return res.status(401).json({ error: 'No llego ningun token' });
  }

  const tokenParts = authHeader.split(' ');
  if (tokenParts.length !== 2 || tokenParts[0] !== 'Bearer') {
    return res.status(401).json({ message: 'El formato del Token es invalido' });
  }

  const token = tokenParts[1];
  const jwtSecret = process.env.JWT_SECRET;

  try {
    const decoded = jwt.verify(token, jwtSecret as string) as { email: string; institutionID: string };
    if (!decoded.email ) {
      return res.status(401).send({ error: 'Token invalido: Usuario sin email' });
    }
    req.email = decoded.email;
    req.institutionID = decoded.institutionID;
    next();
  } catch (err) {
    console.error(err);
    return res.status(401).send({ error: 'Unauthorized' });
  }
};


const authMidd = {
  verifyToken,
};

export default authMidd;