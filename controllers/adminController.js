const Projeto = require("../model/Projeto/Projeto")

const adminController = async (req, res) => {
  try {
    let projetos = await Projeto.findAll()
    res.render("admin/index", { admin: req.session.usuario.admin,projetos })
  } catch (erro) {
    res.redirect('/')
  }
}

const cadastrarProjeto = (req, res) => {
  res.render("admin/cadastrarProjeto")
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

const adminProjeto = async (req,res)=>{
    let id = req.params.id
    try{
      let projeto = await Projeto.findByPk(id)
      res.render('admin/projeto',{projeto})
    }catch(erro){
      res.redirect("/admin")
    }
}

module.exports = { adminController, cadastrarProjeto, cadastrar, adminProjeto }