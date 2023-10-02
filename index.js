const express = require('express')
const app = express()
const PORTA = 8080
const bodyParser = require("body-parser")
const ejs = require("ejs")
const methodOverride = require("method-override")
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use(express.static("public"))
app.set("view engine","ejs")
const connection = require("./model/database/database")
connection.authenticate().then(()=>{console.log("Banco de dados conectado")}).catch(erro=>{console.log(`Ocorreu um erro: ${erro}`)})
const loginRota = require("./routes/login")
const adminRota = require("./routes/admin")
const funcionarioRota = require("./routes/funcionario")
const {cadastroController} = require("./controllers/cadastroController")
const auth = require("./middleware/autenticacao")
const session = require("express-session")
const Projeto = require("./model/Projeto/Projeto")
const Usuario = require("./model/Usuario/Usuario")
const Tarefa = require("./model/Tarefa/Tarefa")

app.use(methodOverride('_method'))

app.use(session({
    secret:"banana",
    cookie:{maxAge:(1000 * 60) * 30}
}))

app.get("/",(req,res)=>{
    res.render("index",{erroEmail:false,cadastroCompleto:false,login:req.session.usuario,tag:"Criar conta"})
})
app.post("/",cadastroController)

app.use("/",loginRota)
app.use("/",auth,adminRota)
app.use("/",auth,funcionarioRota)

app.listen(PORTA,()=>{
    console.log(`Servidor rodando na porta: ${PORTA}`)
})
