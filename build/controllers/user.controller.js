"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.signIn = exports.signUp = void 0;
const user_1 = __importDefault(require("../models/user"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
function token(user) {
    return jsonwebtoken_1.default.sign({ id: user.id, email: user.email }, "secretword", {
        expiresIn: 86400
    });
}
const signUp = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (!req.body.email || !req.body.name || !req.body.lastName || !req.body.password) {
        return res.status(400).json({ msg: "Por favor, ingrese todos los datos." });
    }
    const userF = yield user_1.default.findOne({ email: req.body.email });
    if (userF) {
        return res.status(400).json({ msg: "El usuario ya existe!" });
    }
    let createUser = req.body;
    const newUser = new user_1.default(createUser);
    yield newUser.save();
    return res.status(201).json(newUser);
});
exports.signUp = signUp;
const signIn = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (!req.body.email || !req.body.name || !req.body.lastName || !req.body.password) {
        return res.status(400).json({ msg: "Por favor, ingrese todos los datos." });
    }
    let createUser = req.body;
    const userF = yield user_1.default.findOne({ email: createUser.email });
    if (!userF) {
        return res.status(400).json({ msg: "El usuario no existe" });
    }
    const isMatch = yield userF.comparePassword(createUser.password);
    if (isMatch) {
        console.log(userF);
        return res.status(200).json({ token: token(userF) });
    }
    return res.status(400).json({
        msg: "El correo o la contraseña son incorrectas"
    });
});
exports.signIn = signIn;
