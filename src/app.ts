import express from "express";
import cors from "cors";
import helmet from "helmet";
import authRoutes from "./routes/auth.routes";
import productRoutes from "./routes/product.routes";
import pedidoRoutes from "./routes/pedido.routes";
import pagamentoRoutes from "./routes/pagamento.routes";
import swaggerUi from "swagger-ui-express";
import { swaggerSpec } from "./swagger";

const app = express();

app.use(cors());
app.use(helmet());
app.use(express.json());
app.use("/auth", authRoutes);
app.use("/produtos", productRoutes);
app.use("/pedidos", pedidoRoutes);
app.use("/pagamentos", pagamentoRoutes);


app.get("/", (req, res) => {
  return res.json({
    projeto: "Raizes do Nordeste API",
    status: "online"
  });
});
app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(swaggerSpec)
);
export default app;