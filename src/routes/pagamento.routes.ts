import { Router } from "express";

const router = Router();

router.post("/mock", (req, res) => {
  const { pedidoId, valor, metodoPagamento } = req.body;

  return res.status(200).json({
    mensagem: "Pagamento aprovado com sucesso",
    pagamento: {
      pedidoId,
      valor,
      metodoPagamento,
      status: "APROVADO",
      codigoTransacao: `TXN-${Date.now()}`
    }
  });
});
/**
 * @swagger
 * /pagamentos/mock:
 *   post:
 *     summary: Simula um pagamento
 *     tags:
 *       - Pagamentos
 *     responses:
 *       200:
 *         description: Pagamento aprovado
 */
import logger from "../config/logger";

router.post("/mock", (req, res) => {

  logger.info("Pagamento processado", {
    pedidoId: req.body.pedidoId,
    valor: req.body.valor,
    metodoPagamento: req.body.metodoPagamento
  });

  res.status(200).json({
    status: "APROVADO"
  });
});
export default router;