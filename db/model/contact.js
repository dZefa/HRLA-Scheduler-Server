const Sequelize = require('sequelize');

const db = require('../index');

const Contact = db.define('Contact', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = Contact;
