const Projeto = require("../model/Projeto/Projeto")
const Tarefa = require("../model/Tarefa/Tarefa")
const Usuario = require('../model/Usuario/Usuario')

const funcionarioController = async (req, res) => {
    let projetos = await Projeto.findAll()

    res.render("funcionario/index", {
        admin: req.session.usuario.admin,
        projetos: projetos,
        login: req.session.usuario,
        tag:"Trabalhos"
    })
}

const projetoController = async (req, res) => {
    let id = req.params.id
    try {
        let projeto = await Projeto.findOne({
            where: { id: id },
            include: [{ model: Usuario }]
        })
        let tarefas = await Tarefa.findAll({
            where: { projetoId: projeto.id, usuarioId:req.session.usuario.id }
        })
        res.render("funcionario/projeto", { projeto, admin: req.session.usuario.admin, tarefas, login: req.session.usuario,tag:`Projeto ${projeto.nome}` })
    } catch (erro) {
        res.redirect("/funcionarios")
    }
}

const adicionar = async (req, res) => {
    let id = req.body.id
    let nome = req.body.nome
    let horaEntrada = req.body.horaEntrada
    let horaSaida = req.body.horaSaida
    let a = parseInt(horaSaida.replace(":", ".")) - parseInt(horaEntrada.replace(":", "."))
    let horario = a
    if(horario >= 0){
      horario = a
    }else{
        horario = parseInt(a + 24)
    }
    let horas = horario
    let ano = req.body.ano
    let anoString = req.body.ano
    let anoBr = anoString.substring(0, 4)
    let mesBr = anoString.substring(5, 7)
    let diaBr = anoString.substring(8, 10)
    let relatorio = req.body.relatorio
    await Tarefa.create({
        nome: nome,
        horaEntrada: horaEntrada,
        horaSaida: horaSaida,
        relatorio: relatorio,
        anoString: `${diaBr}/${mesBr}/${anoBr}`,
        ano:ano,
        horas: horas,
        projetoId: id,
        usuarioId: req.session.usuario.id
    }).then(() => {
        res.redirect("/projeto/" + id)
    }).catch((erro) => {
        res.send(erro)
    })
    Projeto.increment({ totalHoras: horas }, { where: { id: id } })
}

const atualizar = async (req,res)=>{
    let id = req.params.id 
    try{
        let tarefa = await Tarefa.findByPk(id)
        res.render("funcionario/atualizar",{tarefa,tag:`Editar ${tarefa.nome}`,login:req.session.usuario.admin})
    }catch(erro){
        res.send(erro)
    }
}

module.exports = { funcionarioController, projetoController, adicionar, atualizar }