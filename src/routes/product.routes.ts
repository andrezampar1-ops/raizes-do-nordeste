import { Router } from "express";

const routes = Router();

routes.post("/", async (req, res) => {
  return res.status(201).json({
    mensagem: "Produto cadastrado com sucesso",
    produto: req.body
  });
});
/**
 * @swagger
 * /produtos:
 *   post:
 *     summary: Cadastra um produto
 *     tags:
 *       - Produtos
 *     responses:
 *       201:
 *         description: Produto criado com sucesso
 */
export default routes;