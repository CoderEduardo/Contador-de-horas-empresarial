const Projeto = require("../model/Projeto/Projeto")
const Tarefa = require('../model/Tarefa/Tarefa')
const Usuario = require("../model/Usuario/Usuario")


const adminController = async (req, res) => {
  try {
    let projetos = await Projeto.findAll({ order: [['id', 'DESC']] })
    res.render("admin/index", { admin: req.session.usuario.admin, projetos, login: req.session.usuario, tag: "Admin" })
  } catch (erro) {
    res.redirect('/')
  }
}

const cadastrarProjeto = (req, res) => {
  res.render("admin/cadastrarProjeto", { login: req.session.usuario, tag: "Criar projeto" })
}

const cadastrar = async (req, res) => {
  try {
    await Projeto.create({
      nome: req.body.nome,
      descricao: req.body.descricao,
      usuarioId: req.session.usuario.id
    })
    res.redirect("/admin")
  } catch (erro) {
    res.sendStatus(400)
  }
}

const adminProjeto = async (req, res) => {
  let id = req.params.id
  try {
    let projeto = await Projeto.findOne({
      where: { id: id },
      include: [{ model: Usuario }],
    })
    let tarefas = await Tarefa.findAll({
      where: { projetoId: projeto.id },
      include: [{ model: Usuario }]
    })
    res.render('admin/projetoAdmin', { projeto, tarefas, login: req.session.usuario, tag: `Projeto ${projeto.nome}` })
  } catch (erro) {
    res.send(erro)
  }
}

const editarProjeto = async (req, res) => {
  let id = req.params.id
  try {
    let projeto = await Projeto.findByPk(id)
    res.render("admin/editar", { projeto, tag: `Editar ${projeto.nome}`, login: req.session.usuario.admin })
  } catch (erro) {
    res.send(`Ocorreu um erro ao achar o projeto: ${erro}`)
  }
}

const deletar = async (req, res) => {
  let id = req.body.id
  try {
    await Projeto.destroy({
      where: { id: id }
    })
    res.redirect("/admin")
  } catch (erro) {
    res.send(erro)
  }
}

const atualizar = async (req, res) => {
  let { id, nome, descricao } = req.body
  try {
    await Projeto.update(
      { nome: nome, descricao: descricao },
      { where: { id: id } })
    res.redirect("/admin")
  } catch (erro) {
    res.send(erro)
  }
}

const funcionarios = async (req, res) => {
      let tarefas = await Tarefa.findAll({
        include:[{model:Usuario}]
      })

      res.render("admin/funcionario",{tarefas,login:req.session.usuario.admin,tag:"Funcionários"})
}

module.exports = { adminController, cadastrarProjeto, cadastrar, adminProjeto, editarProjeto, deletar, atualizar, funcionarios }