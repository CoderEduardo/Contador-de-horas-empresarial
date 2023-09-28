const express = require("express")
const router = express.Router()
const {adminController, cadastrarProjeto, cadastrar, adminProjeto} = require("../controllers/adminController")


router.get("/admin",adminController)
router.get("/admin/cadastrarProjeto",cadastrarProjeto)
router.post("/cadastrar",cadastrar)
router.get('/admin/projeto/:id', adminProjeto)

module.exports = router