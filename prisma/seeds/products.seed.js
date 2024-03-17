const { PrismaClient } = require("@prisma/client")

const prisma = new PrismaClient()

async function main() {
  await prisma.product.create({
    data: {
      description: 'Product 1',
      price: 10.99,
      quantity: 100,
    }
  })

  await prisma.product.create({
    data: {
      description: 'Product 2',
      price: 20.99,
      quantity: 200,
    }
  })

  await prisma.product.create({
    data: {
      description: 'Product 3',
      price: 30.99,
      quantity: 300,
    }
  })
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  })