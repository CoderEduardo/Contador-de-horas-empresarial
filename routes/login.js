const express = require("express")
const router= express.Router()
const {loginController, autenticacaoController} = require("../controllers/loginController")

router.get("/login",loginController)

router.post("/login",autenticacaoController)

module.exports = router