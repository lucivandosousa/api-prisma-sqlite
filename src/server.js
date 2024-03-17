require("dotenv").config()
const express = require("express")
const route = require("./routes")

const PORT = process.env.PORT || 3000

const app = express()

app.use(express.json())
app.use(route)

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`))