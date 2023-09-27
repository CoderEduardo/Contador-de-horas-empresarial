const express = require('express')
const app = express()
const PORTA = 8080
const bodyParser = require("body-parser")
const ejs = require("ejs")
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use(express.static("public"))
app.set("view engine","ejs")
const connection = require("./model/database/database")
connection.authenticate().then(()=>{console.log("Banco de dados conectado")}).catch(erro=>{console.log(`Ocorreu um erro: ${erro}`)})
const loginRota = require("./routes/login")
const adminRota = require("./routes/admin")
const {cadastroController} = require("./controllers/cadastroController")
const session = require("express-session")

app.use(session({
    secret:"banana",
    cookie:{maxAge:30000000}
}))

function auth(req,res,next){
    if(req.session.usuario!=undefined){
        next()
    }else{
        res.redirect("/")
    }
    
}

app.get("/",(req,res)=>{
    res.render("index",{erroEmail:false,cadastroCompleto:false})
})
app.post("/",cadastroController)



app.use("/",loginRota)
app.use("/",auth,adminRota)

app.listen(PORTA,()=>{
    console.log(`Servidor rodando na porta: ${PORTA}`)
})
