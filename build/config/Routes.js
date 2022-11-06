"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_controller_1 = require("../controllers/user.controller");
const router = (0, express_1.Router)();
router.post('/signup', user_controller_1.signUp);
router.post('/signin', user_controller_1.signIn);
router.get("/", (req, res) => {
    return res.send("El servidor está funcionando correctamente!");
});
router.get("/ping", (req, res) => {
    res.status(200).json({ message: "pong" });
});
exports.default = router;
