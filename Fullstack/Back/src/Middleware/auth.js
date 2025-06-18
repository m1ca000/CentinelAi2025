import dotenv from 'dotenv';
dotenv.config();
import jwt from 'jsonwebtoken';

export const verifyToken = async (req, res, next) => {
  const authHeader = req.headers['authorization'];
  if (!authHeader) {
    return res.status(401).json({ error: 'No llego ningun token' });
  }

  const tokenParts = authHeader.split(' ');
  if (tokenParts.length !== 2 || tokenParts[0] !== 'Bearer') {
    return res.status(401).json({ message: 'El formato del Token es invalido' });
  }

  const token = tokenParts[1];
  const jwtSecret = process.env.SECRET_KEY;

  try {
    const decoded = jwt.verify(token, jwtSecret);
    
    if (!decoded.name) {
      return res.status(401).send({ error: 'Token invalido: Usuario sin nombre' });
    }
    req.name = decoded.name;
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