const funcionarioController = (req,res)=>{
    res.render("funcionario/index",{
        admin:req.session.usuario.admin
    })
}

module.exports = {funcionarioController}