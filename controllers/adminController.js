const adminController = (req,res)=>{
    res.render("admin/index",{
        admin: req.session.usuario.admin
    })
}

const cadastrarProjeto = (req,res)=>{
    res.render("admin/cadastrarProjeto")
}

module.exports = {adminController, cadastrarProjeto}