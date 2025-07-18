import { registerAdminService, getAdminByEmailService } from "../Services/admin.service";
import bcrypt from 'bcrypt';
import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

export const registerAdminController = async (req: Request, res: Response) => {
    try {
        const { email, name, password } = req.body;
        if (!email || !name || !password) {
            return res.status(400).json({ error: 'Todos los campos son obligatorios' });
        }
        const emailExistente = await getAdminByEmailService(email);
        
        if (emailExistente.length === 0) {
            const saltRounds = 10;
            const hashedPassword = await bcrypt.hash(password, saltRounds);

            const newAdmin = await registerAdminService(email, name, hashedPassword)
            return res.status(201).json({ message: 'Usuario registrado con éxito.'});
        }
        else {
            return res.status(400).json({ error: 'Este email ya se encuentra en uso' });
        }
    } catch (err) {
        res.status(500).json({ error: 'Error de db' });
        throw err;
    }
}

export const loginAdminController = async (req: Request, res: Response) => {
    try {
        if (!req.body.email || !req.body.password) {
            return res.status(400).json({ error: 'Todos los campos son obligatorios' });
        }

        const admin = await getAdminByEmailService(req.body.email);
        if (admin.length === 0) {
            return res.status(400).json({ error: 'Credenciales inválidas' });
        }
        const hashedPassword = admin[0].password;
        console.log(hashedPassword);
        const isPasswordMatch = await bcrypt.compare(req.body.password, hashedPassword);
        console.log(isPasswordMatch);
        if(isPasswordMatch){
            const token = jwt.sign({ email: admin[0].email, institutionID: admin[0].institutionID }, process.env.JWT_SECRET as string);
            return res.status(200).json({ message: 'Login exitoso', token }); 
        }
        else {
            return res.status(400).json({ error: 'Credenciales inválidas' });
        }
    } catch (err) {
        res.status(500).json({ error: 'Error de db' });
        throw err;
    }
}