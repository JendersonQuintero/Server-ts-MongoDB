"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
exports.router = router;
router.get("/", (req, res) => {
    return res.send("El servidor está funcionando correctamente!");
});
router.get("/ping", (req, res) => {
    res.status(200).json({ message: "pong" });
});
