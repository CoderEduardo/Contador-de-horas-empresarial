const Projeto = require("../model/Projeto/Projeto")
const Tarefa = require("../model/Tarefa/Tarefa")

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

        Tarefa.findAll({
            where:{projetoId:id}
        }).then(tarefas=>{
            res.render("funcionario/projeto", { projeto: projeto, admin:req.session.usuario.admin, tarefas:tarefas })
        })
        
    } catch (erro) {
        res.redirect("/funcionarios")
    }
}

const adicionar = async (req,res) =>{
   let id = req.body.projetoId
   let nome = req.body.nome
   let horaEntrada = req.body.horaEntrada
   let horaSaida = req.body.horaSaida 
   let relatorio = req.body.relatorio 

   Tarefa.create({
    nome:nome,
    horaEntrada:horaEntrada,
    horaSaida:horaSaida,
    relatorio:relatorio,
    projetoId:id
   }).then(()=>{
    res.redirect("/projeto/" + id)
   }).catch((erro)=>{
    res.send(erro)
   })
   
}

module.exports = { funcionarioController, projetoController, adicionar }