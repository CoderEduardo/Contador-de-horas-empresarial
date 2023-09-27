const Projeto = require("../model/Projeto/Projeto")

const funcionarioController = async (req, res) => {
    let projetos = await Projeto.findAll()

    res.render("funcionario/index", {
        admin: req.session.usuario.admin,
        projetos:projetos
    })
}

const adicionarTarefa = (req,res)=>{

}

module.exports = { funcionarioController,adicionarTarefa }