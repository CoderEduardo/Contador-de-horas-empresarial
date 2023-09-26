const express = require('express')
const app = express()
const PORTA = 8080
const connection = require("./model/database/database")
connection.authenticate().then(()=>{console.log("Banco conectado com sucesso")}).catch(erro=>{console.log(`Ocorreu um erro: ${erro}`)})
const loginRota = require("./routes/login")

app.use("/",loginRota)

app.listen(PORTA,()=>{
    console.log(`Servidor rodando na porta: ${PORTA}`)
})
