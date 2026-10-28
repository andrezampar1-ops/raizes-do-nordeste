import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import { prisma } from "../config/prisma";
import { authConfig } from "../config/auth";

export default class AuthService {
  async login(email: string, senha: string) {
    const usuario = await prisma.usuario.findUnique({
      where: { email },
    });

    if (!usuario) {
      throw new Error("Usuário não encontrado");
    }

    const senhaValida = senha === usuario.senha;

    if (!senhaValida) {
      throw new Error("Senha inválida");
    }

   const token = jwt.sign(
  {
    id: usuario.id,
    perfil: usuario.perfil,
  },
  String(authConfig.jwt.secret),
  {
    expiresIn: "1d",
  }
);
    return { token };
  }
}