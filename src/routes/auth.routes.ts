import { Router } from "express";

const router = Router();

/**
 * @swagger
 * /auth/login:
 *   post:
 *     summary: Realiza autenticação do usuário
 *     tags:
 *       - Autenticação
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - senha
 *             properties:
 *               email:
 *                 type: string
 *                 example: admin@email.com
 *               senha:
 *                 type: string
 *                 example: 123456
 *     responses:
 *       200:
 *         description: Login realizado com sucesso
 *       401:
 *         description: Credenciais inválidas
 */
router.post("/login", (req, res) => {
  const { email, senha } = req.body;

  if (email === "admin@email.com" && senha === "123456") {
    return res.status(200).json({
      mensagem: "Login realizado com sucesso",
      token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9"
    });
  }

  return res.status(401).json({
    mensagem: "Credenciais inválidas"
  });
});
import logger from "../config/logger";

router.post("/login", (req, res) => {
  const { email } = req.body;

  logger.info("Tentativa de login", {
    email,
    data: new Date().toISOString()
  });

  return res.status(200).json({
    mensagem: "Login realizado com sucesso"
  });
});
export default router;