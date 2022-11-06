"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_controller_1 = require("../controllers/user.controller");
const router = (0, express_1.Router)();
// Crear nuevo usuario
router.post('/signup', user_controller_1.signUp);
// Iniciar sesión
router.post('/signin', user_controller_1.signIn);
// Entrada principal del servidor
router.get("/", (req, res) => {
    return res.send("El servidor está funcionando correctamente!");
});
// Se muestran todos los usuarios
router.get("/users", user_controller_1.viewUsers);
// Cerrar sesión
router.get("/logout", user_controller_1.logout);
exports.default = router;
