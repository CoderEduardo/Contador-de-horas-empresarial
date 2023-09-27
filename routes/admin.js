const express = require("express")
const router = express.Router()
const {adminController, cadastrarProjeto} = require("../controllers/adminController")


router.get("/admin",adminController)
router.get("/admin/cadastrarProjeto",cadastrarProjeto)

module.exports = router