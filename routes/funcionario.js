const express = require("express")
const router = express.Router()
const {funcionarioController, projetoController, adicionar, atualizar, editar,deletar} = require("../controllers/funcionarioController")

router.get("/funcionarios",funcionarioController)
router.get("/projeto/:id",projetoController)
router.post("/adicionar",adicionar)
router.get("/atualizar/:id",editar)
router.put("/tarefa",atualizar)
router.delete("/tarefa",deletar)

module.exports = router