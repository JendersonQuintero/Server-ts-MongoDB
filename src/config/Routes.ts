import express, { Request, Response } from "express";

const router = express.Router();

router.get("/", (req: Request, res: Response) => {
  return res.send("El servidor está funcionando correctamente!");
});

router.get("/ping", (req: Request, res: Response) => {
  res.status(200).json({ message: "pong" });
});

export { router };