const Sequelize = require("sequelize")
const connection = require("../database/database")
const Projeto = require("../Projeto/Projeto")

const Tarefa = connection.define("tarefas", {
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    horaEntrada: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    horaSaida: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    relatorio: {
        type: Sequelize.STRING
    }
})

Tarefa.belongsTo(Projeto)
Projeto.hasMany(Tarefa) 

Tarefa.sync({force:false})

module.exports = Tarefa