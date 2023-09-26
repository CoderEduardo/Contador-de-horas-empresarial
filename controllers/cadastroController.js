const bcrypt = require("bcryptjs")
const Usuario = require("../model/Usuario/Usuario")

const cadastroController = (req,res) => {
    let {nome,email,senha,admin} = req.body
    let hash = bcrypt.hashSync(senha)

    Usuario.create({
        nome:nome,
        email:email,
        senha:hash,
        admin:admin
    }).then(()=>{
        res.redirect("/")
    })

}

module.exports = {cadastroController}