import {Router, Request, Response } from "express";
import { signIn, signUp, viewUsers, logout } from "../controllers/user.controller";

const router = Router();

// Crear nuevo usuario
router.post('/signup', signUp);

// Iniciar sesión
router.post('/signin', signIn);

// Entrada principal del servidor
router.get("/", (req: Request, res: Response) => {
  return res.send("El servidor está funcionando correctamente!");
});

// Se muestran todos los usuarios
router.get("/users", viewUsers);

// Cerrar sesión
router.get("/logout", logout);

export default router;