import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.usuario.create({
    data: {
      nome: "Administrador",
      email: "admin@raizes.com",
      senha: "123456",
      perfil: "ADMIN"
    }
  });

  console.log("Usuário criado!");
}

main()
  .catch(console.error)
  .finally(async () => {
    await prisma.$disconnect();
  });