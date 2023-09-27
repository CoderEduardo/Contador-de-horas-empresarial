const express = require("express")
const router = express.Router()
const {funcionarioController, projetoController} = require("../controllers/funcionarioController")

router.get("/funcionarios",funcionarioController)
router.get("/projeto/:id",projetoController)

module.exports = router