import { createAdminService, getAdminByEmailService } from "../Services/admin.service.js";
import bcrypt from 'bcrypt';

export const createAdminController = async (req, res) => {
    try {
        const { email, name, password } = req.body;
        const emailExistente = await getAdminByEmailService(email);
        if (emailExistente == "") {
            const saltRounds = 10;
            const hashedPassword = await bcrypt.hash(password, saltRounds);

            const newAdmin = await createAdminService(email, name, hashedPassword)
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