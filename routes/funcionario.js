const express = require("express")
const router = express.Router()
const {funcionarioController, projetoController, adicionar} = require("../controllers/funcionarioController")

router.get("/funcionarios",funcionarioController)
router.get("/projeto/:id",projetoController)
router.post("/adicionar",adicionar)

module.exports = router