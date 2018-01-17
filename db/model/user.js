const Sequelize = require('sequelize');

const db = require('../index');

const User = db.define('User', {
  type: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  login: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  groupName: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  isNew: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: true,
  },
});

module.exports = User;
