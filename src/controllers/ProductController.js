const { PrismaClient } = require("@prisma/client")

const prisma = new PrismaClient()

class ProductController {
  static async saveProduct(req, res) {
    const { ...data } = req.body
    const newProduct = { data }

    await prisma.product.create(newProduct)

    res.status(201).send("Produto cadastrado")
  }

  static async getProducts(req, res) {
    const products = await prisma.product.findMany()

    res.status(200).json(products)
  }

  static async getProductById(req, res) {
    const { id } = req.params

    const product = await prisma.product.findUnique({
      where: {
        id: +id
      }
    })

    if (!product) {
      return res.status(404).send("Produto não localizado")
    }

    res.status(200).json(product)
  }

  static async updateProductById(req, res) {
    const { id } = req.params
    const { ...data } = req.body
    const product = await prisma.product.findUnique({
      where: {
        id: +id
      }
    })

    if (!product) {
      return res.status(404).send("Produto não localizado")
    }

    await prisma.product.update({
      where: {
        id: +id
      },
      data: {
        ...data
      }
    })

    res.status(200).send("Produto atualizado")
  }

  static async deleteProductById(req, res) {
    const { id } = req.params
    const product = await prisma.product.findUnique({
      where: {
        id: +id
      }
    })

    if (!product) {
      return res.status(404).send("Produto não localizado")
    }

    await prisma.product.delete({
      where: {
        id: +id
      }
    })

    res.status(200).send("Produto excluído")
  }
}

module.exports = ProductController