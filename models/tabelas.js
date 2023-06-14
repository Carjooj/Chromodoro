const db = require("./banco")

const usuarios = db.sequelize.define('usuarios', {
    uid : {
        type: db.Sequelize.STRING,
        primaryKey: true
    },
    nome : {
        type: db.Sequelize.STRING,
        allowNull: false
    }
})

const projetos = db.sequelize.define('projetos', {
    id_projeto : {
        type: db.Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    id_usuario : {
       type: db.Sequelize.STRING,
       //fk
    },
    nome : {
        type: db.Sequelize.STRING,
        allowNull: false
    },
    descricao : {
        type: db.Sequelize.TEXT
    },
    progresso : {
        type: db.Sequelize.ENUM('concluída', 'não concluída', 'em andamento')
    },
    data_projeto : {
        type: db.Sequelize.DATEONLY
    }
})

const tarefas = db.sequelize.define('tarefas', {
    id_tarefa : {
        type: db.Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    id_usuario : {
        type: db.Sequelize.STRING,
        //fk
    },
    
})