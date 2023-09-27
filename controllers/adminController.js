const adminController = (req,res)=>{
    res.render("admin/index",{
        admin: req.session.usuario.admin
    })
}

module.exports = {adminController}