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
    nome : {
        type: db.Sequelize.STRING,
        allowNull: false
    },
    descricao : {
        type: db.Sequelize.TEXT
    },
    progresso : {
        type: db.Sequelize.ENUM('Concluída', 'Não concluída', 'Em andamento')
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
    nome : {
        type: db.Sequelize.STRING,
        allowNull: false
    },
    descricao : {
        type: db.Sequelize.TEXT
    },
    est_ciclo : {
        type: db.Sequelize.INTEGER
    },
    progresso : {
        type: db.Sequelize.ENUM('Concluída', 'Não concluída', 'Em andamento')
    }
})

const tarefasProjeto = db.sequelize.define('tarefasProjeto', {
    nome : {
        type: db.Sequelize.STRING,
        allowNull: false
    },
    descricao : {
        type: db.Sequelize.TEXT
    },
    est_ciclo : {
        type: db.Sequelize.INTEGER
    },
    progresso : {
        type: db.Sequelize.ENUM('Concluída', 'Não concluída', 'Em andamento')
    }
})

/* FKs
tabela projetos, id_usuario rf usuarios (id)
tabela tarefas, id_usuario rf usuarios(id)
tabela tarefasProjeto, id_projeto rf projetos(id_projeto)
*/

projetos.belongsTo(usuarios, {
    constraint : true,
    foreignKey : 'id_usuario'
})

tarefas.belongsTo(usuarios, {
    constraint : true,
    foreignKey : 'id_usuario'
})

tarefasProjeto.belongsTo(projetos, {
    constraint : true,
    foreignKey : 'id_projeto'
})

// db.sequelize.sync({force : true}).then(() => {
//     console.log("Tabelas criadas")
// })

module.exports = {
    usuarios,
    projetos,
    tarefas,
    tarefasProjeto
}