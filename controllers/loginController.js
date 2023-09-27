const Usuario = require("../model/Usuario/Usuario")
const bcrypt = require("bcryptjs")
const JWT = require("jsonwebtoken")
const secret = "banana"

const loginController = (req, res) => {
    res.render("login")
}

const autenticacaoController = async (req, res) => {
   let email = req.body.email
    Usuario.findOne({
        where:{email:email}
    }).then(usuario=>{
        let senha = req.body.senha
        const verificarSenha = bcrypt.compareSync(senha,usuario.senha)
        if(verificarSenha){
           req.session.usuario = {
            id:usuario.id,
            admin:usuario.admin
           }
           res.redirect("/login")
        }
    })


}

module.exports = { loginController, autenticacaoController }