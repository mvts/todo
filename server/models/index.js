const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("sqlite::memory:");

let db = {};
db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
