const express = require('express')
const app = express()
const PORTA = 8080
const bodyParser = require("body-parser")
const ejs = require("ejs")
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.set('view engine','ejs')
app.set(express.static("public"))
const loginRota = require("./routes/login")


app.use("/",loginRota)

app.listen(PORTA,()=>{
    console.log(`Servidor rodando na porta: ${PORTA}`)
})
