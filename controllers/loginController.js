const Usuario = require("../model/Usuario/Usuario")
const bcrypt = require("bcryptjs")
const JWT = require("jsonwebtoken")
const secret = "banana"

const logout = (req,res)=>{
    req.session.usuario = undefined
    res.redirect("/")
}

const loginController = (req, res) => {
    res.render("login")
}

const autenticacaoController = async (req, res) => {
    let email = req.body.email
    try {
        let usuario = await Usuario.findOne({ where: { email: email } })
        let senha = req.body.senha
        const verificarSenha = bcrypt.compareSync(senha, usuario.senha)
        if (verificarSenha) {
            req.session.usuario = {
                id: usuario.id,
                admin: usuario.admin
            }
            if (usuario.admin == 1) {
                res.redirect("/admin")
            } else {
                res.redirect("/funcionarios")
            }
        }
    }catch(erro){
        res.redirect("/login")
    }



}

module.exports = { loginController, autenticacaoController, logout}