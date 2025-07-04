import { uploadPhotoToCloudinary } from "../Services/person.service";

export const uploadPerson = async (req, res) => {
    try {
        const file = req.file.buffer;
        const photo = await uploadPhotoToCloudinary(file);
        return res.status(201).json({ message: 'Persona registrada con exito', photo });
    } catch(err) {
        throw err
    }
}