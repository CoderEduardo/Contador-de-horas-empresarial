const express = require("express")
const router = express.Router()
const {funcionarioController, projetoController, adicionar, atualizar} = require("../controllers/funcionarioController")

router.get("/funcionarios",funcionarioController)
router.get("/projeto/:id",projetoController)
router.post("/adicionar",adicionar)
router.get("/atualizar/:id",atualizar)
module.exports = router