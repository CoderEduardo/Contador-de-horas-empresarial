const express = require("express")
const router = express.Router()
const {funcionarioController} = require("../controllers/funcionarioController")

router.get("/funcionarios",funcionarioController)

module.exports = router