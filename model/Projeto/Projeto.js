const {Sequelize, DataTypes} = require("sequelize")
const connection = require("../database/database")
const Usuario = require("../Usuario/Usuario")

const Projeto = connection.define("projetos",{
    nome:{
        type:Sequelize.STRING,
        allowNull:false
    },
    descricao:{
        type:Sequelize.TEXT,
    },
    totalHoras:{
        type:DataTypes.INTEGER,
        defaultValue:0
      },
})

Projeto.belongsTo(Usuario)
Usuario.hasMany(Projeto)

Projeto.sync({force:false})

module.exports = Projeto