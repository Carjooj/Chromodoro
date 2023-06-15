const Sequelize = require("sequelize")
const sequelize = new Sequelize("chromodoro", "root", "", {
    host: "localhost",
    dialect: "mysql",
    port: "8080"
})

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}

