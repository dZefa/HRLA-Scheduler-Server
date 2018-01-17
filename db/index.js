const Sequelize = require('sequelize');

const db = new Sequelize(process.env.PG_DB_URL);

module.exports = db;