const express = require("express")
const router = express.Router()
const {adminController, cadastrarProjeto, cadastrar, adminProjeto,editarProjeto, deletar,atualizar} = require("../controllers/adminController")


router.get("/admin",adminController)
router.get("/admin/cadastrarProjeto",cadastrarProjeto)
router.post("/cadastrar",cadastrar)
router.get('/admin/projeto/:id', adminProjeto)
router.get("/admin/editar/:id",editarProjeto)
router.delete("/",deletar)
router.put("/",atualizar)

module.exports = router