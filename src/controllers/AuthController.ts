import { Request, Response } from "express";
import AuthService from "../services/AuthService";

export class AuthController {
  async login(req: Request, res: Response) {
    try {
      const { email, senha } = req.body;

      const authService = new AuthService();

      const resultado = await authService.login(
        email,
        senha
      );

      return res.status(200).json(resultado);
    } catch (error) {
      return res.status(401).json({
        erro: "Credenciais inválidas",
      });
    }
  }
}