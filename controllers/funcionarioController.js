const Projeto = require("../model/Projeto/Projeto")

const funcionarioController = async (req, res) => {
    let projetos = await Projeto.findAll()

    res.render("funcionario/index", {
        admin: req.session.usuario.admin,
        projetos: projetos
    })
}

const projetoController = async (req, res) => {
    let id = req.params.id
    try {
        let projeto = await Projeto.findByPk(id)
        if (projeto == undefined) {
            res.redirect("/funcionarios")
        }
        res.render("funcionario/projeto", { projeto: projeto, admin:req.session.usuario.admin })
    } catch (erro) {
        res.redirect("/funcionarios")
    }
}

module.exports = { funcionarioController, projetoController }