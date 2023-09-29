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
        type: DataTypes.INTEGER,
        allowNull: false
    },
    horaSaida: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    ano:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    totalHoras:{
        type:DataTypes.INTEGER,
        allowNull:false
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