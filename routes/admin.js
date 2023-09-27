const express = require("express")
const router = express.Router()
const {adminController, cadastrarProjeto, cadastrar} = require("../controllers/adminController")


router.get("/admin",adminController)
router.get("/admin/cadastrarProjeto",cadastrarProjeto)
router.post("/cadastrar",cadastrar)

module.exports = router