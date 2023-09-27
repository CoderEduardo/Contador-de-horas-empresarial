const Projeto = require("../model/Projeto/Projeto")

const funcionarioController = async (req, res) => {
    let projetos = await Projeto.findAll()

    res.render("funcionario/index", {
        admin: req.session.usuario.admin,
        projetos: projetos
    })
}

const adicionarTarefa = async (req, res) => {
    let id = req.params.id
    let projeto = await Projeto.findByPk(id)
    try {
        if (projeto == undefined) {
            res.redirect("/funcionarios")
        }
        res.render("funcionario/projeto", { projeto: projeto })
    } catch (erro) {
        res.redirect("/funcionarios")
    }
}

module.exports = { funcionarioController, adicionarTarefa }