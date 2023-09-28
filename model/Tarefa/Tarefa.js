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
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    },
    horaSaida: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
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