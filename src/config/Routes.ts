import {Router, Request, Response } from "express";
import { signIn, signUp } from "../controllers/user.controller";

const router = Router();

router.post('/signup', signUp);
router.post('/signin', signIn);

router.get("/", (req: Request, res: Response) => {
  return res.send("El servidor está funcionando correctamente!");
});

router.get("/ping", (req: Request, res: Response) => {
  res.status(200).json({ message: "pong" });
});

export default router;