import { Request, Response } from 'express';
import user, { User } from '../models/user';
import jwt from 'jsonwebtoken';

// Función para generar Tokens para control de sesión
function token(user: User) {
    return jwt.sign({id: user.id, email: user.email}, "secretword", {
        expiresIn: 86400
    });
}

// Controlador para Registrarte
export const signUp = async (req: Request, res: Response): Promise<Response> => {
    if (!req.body.email || !req.body.name || !req.body.lastName || !req.body.password) {
        return res.status(400).json({ msg: "Por favor, ingrese todos los datos." })
    }
    const userF = await user.findOne({email: req.body.email});
    if (userF) {
        return res.status(400).json({msg: "El usuario ya existe!"});
    }

    let createUser: User = req.body;

    const newUser = new user(createUser);
    await newUser.save();

    return res.status(201).json(newUser);
}

// Controlador para inicio de sesion
export const signIn = async (req: Request, res: Response) => {
    if (!req.body.email || !req.body.name || !req.body.lastName || !req.body.password) {
        return res.status(400).json({ msg: "Por favor, ingrese todos los datos." })
    }
    let createUser: User = req.body;

    const userF = await user.findOne({email: createUser.email});
    if (!userF) {
        return res.status(400).json({msg: "El usuario no existe"});
    }

    const isMatch = await userF.comparePassword(createUser.password);
    if (isMatch) {
        console.log(userF);
        return res.status(200).json({token: token(userF)}); 
    }

    return res.status(400).json({
        msg: "El correo o la contraseña son incorrectas"
    });
}

// Controlador para enviar todos los usuarios
export const viewUsers = async (req: Request, res: Response) => {
    const users = await user.find();
    res.status(200).json(users);
}

// Controlador para cerrar sesión
export const logout = async (req: Request, res: Response) => {
    // Configuración para logout
}