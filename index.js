const express = require('express')
const app = express()
const PORTA = 8080
const loginRota = require("./routes/login")

app.use("/",loginRota)

app.listen(PORTA,()=>{
    console.log(`Servidor rodando na porta: ${PORTA}`)
})
