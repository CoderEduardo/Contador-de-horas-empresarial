const Usuario = require("../model/Usuario/Usuario")
const bcrypt = require("bcryptjs")

const loginController = (req,res)=>{
    res.render("login")
}

const autenticacaoController = async (req,res)=>{
    let usuario = await Usuario.findOne({email:email})
    if(!usuario){
        res.redirect("/login")
    }
        
    let verificarSenha = bcrypt.compareSync(req.body.senha,usuario.senha)

    if(!verificarSenha){
        res.redirect("/login")
    }else{
        
    }

    
}

module.exports = {loginController,autenticacaoController}