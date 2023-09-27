const express = require("express")
const router = express.Router()
const {funcionarioController, adicionarTarefa} = require("../controllers/funcionarioController")

router.get("/funcionarios",funcionarioController)
router.get("/projeto/:id",adicionarTarefa)

module.exports = router