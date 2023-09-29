const express = require("express")
const router= express.Router()
const {loginController, autenticacaoController,logout} = require("../controllers/loginController")

router.get("/login",loginController)
router.get('/sair',logout)
router.post("/login",autenticacaoController)

module.exports = router