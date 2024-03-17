const { Router } = require("express")
const ProductController = require("../controllers/ProductController")

const route = Router()

route.get("/", (req, res) => {
  return res.status(200).send("API com Prima e SQLite")
})

route.post("/products", ProductController.saveProduct)
route.get("/products", ProductController.getProducts)
route.get("/products/:id", ProductController.getProductById)
route.put("/products/:id", ProductController.updateProductById)
route.delete("/products/:id", ProductController.deleteProductById)

module.exports = route