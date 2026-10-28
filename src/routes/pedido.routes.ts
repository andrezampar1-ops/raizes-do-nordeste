import { Router } from "express";

const router = Router();

router.post("/", (req, res) => {
  return res.status(201).json({
    mensagem: "Pedido criado com sucesso",
    pedido: req.body,
    status: "PENDENTE",
  });
});
/**
 * @swagger
 * /pedidos:
 *   post:
 *     summary: Cria um pedido
 *     tags:
 *       - Pedidos
 *     responses:
 *       201:
 *         description: Pedido criado com sucesso
 */
import logger from "../config/logger";

router.post("/", (req, res) => {
  logger.info("Pedido criado", {
    pedido: req.body
  });

  res.status(201).json({
    mensagem: "Pedido criado com sucesso"
  });
});
export default router;