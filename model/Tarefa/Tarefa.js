const{ Sequelize, DataTypes} = require("sequelize")
const connection = require("../database/database")
const Projeto = require("../Projeto/Projeto")
const Usuario = require('../Usuario/Usuario')

const Tarefa = connection.define("tarefas", {
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    horaEntrada: {
        type: DataTypes.STRING,
        allowNull: false
    },
    horaSaida: {
        type: DataTypes.STRING,
        allowNull: false
    },
    anoString:{
        type:DataTypes.STRING,
        allowNull:false
    },
    ano:{
        type:DataTypes.DATEONLY
    },
    horas:{
        type:DataTypes.INTEGER
    },
    relatorio: {
        type: Sequelize.TEXT
    }
})

Tarefa.belongsTo(Projeto)
Projeto.hasMany(Tarefa) 
//
Tarefa.belongsTo(Usuario)
Usuario.hasMany(Tarefa)

Tarefa.sync({force:false})

module.exports = Tarefa