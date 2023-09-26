const express = require("express")
const router= express.Router()

router.get("/login",(req,res)=>{
    res.send("Rota de login")
})

module.exports = router