const express = require("express")
const router = express.Router()


router.get("/admin",(req,res)=>{
    res.render("admin/index",{
        admin: req.session.usuario.admin
    })
})

module.exports = router