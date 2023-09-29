const bcrypt = require("bcryptjs")
const Usuario = require("../model/Usuario/Usuario")

const cadastroController = async (req, res) => {
    let { nome, email, senha, admin } = req.body
    let hash = bcrypt.hashSync(senha)

    let usuario = await Usuario.findOne({ where: { email: email } })
    if (usuario == undefined) {
        Usuario.create({
            nome: nome,
            email: email,
            senha: hash,
            admin: admin
        }).then(() => {
            res.render("index", { erroEmail: false, cadastroCompleto: true, login:req.session.usuario})
        })
    } else {
        res.render("index", { erroEmail: true, cadastroCompleto: false, login:req.session.usuario })
    }
}

module.exports = { cadastroController }