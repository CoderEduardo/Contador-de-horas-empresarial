const Projeto = require("../model/Projeto/Projeto")
const Tarefa = require("../model/Tarefa/Tarefa")
const Usuario = require('../model/Usuario/Usuario')

const funcionarioController = async (req, res) => {
    let projetos = await Projeto.findAll()

    res.render("funcionario/index", {
        admin: req.session.usuario.admin,
        projetos: projetos,
        login:req.session.usuario
    })
}

const projetoController = async (req, res) => {
    let id = req.params.id
    try {
        let projeto = await Projeto.findOne({
            where:{id:id},
            include:[{model:Usuario}]
        })
        let tarefas = await Tarefa.findAll({
            where:{projetoId:projeto.id}
        })
        res.render("funcionario/projeto",{projeto,admin:req.session.usuario.admin,tarefas,login:req.session.usuario})
    }  catch (erro) {
        res.redirect("/funcionarios")
    }
}

const adicionar = async (req, res) => {
    let id = req.body.id
    let nome = req.body.nome
    let horaEntrada = req.body.horaEntrada
    let horaSaida = req.body.horaSaida
    let ano = req.body.ano
    let anoBr = ano.substring(0,4)
    let mesBr = ano.substring(5,7)
    let diaBr = ano.substring(8,10)
    let relatorio = req.body.relatorio

    await Tarefa.create({
        nome: nome,
        horaEntrada: horaEntrada,
        horaSaida: horaSaida,
        relatorio: relatorio,
        ano:`${diaBr}/${mesBr}/${anoBr}`,
        totalHoras:1,
        projetoId: id,
        usuarioId: req.session.usuario.id
    }).then(() => {
        res.redirect("/projeto/" + id)
    }).catch((erro) => {
        res.send(erro)
    })

}

module.exports = { funcionarioController, projetoController, adicionar }