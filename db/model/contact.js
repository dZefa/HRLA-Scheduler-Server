const Sequelize = require('sequelize');

const db = require('../index');
const User = require('./user');

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

User.hasMany(Contact, { foreignKey: 'userId', allowNull: false, onDelete: 'CASCADE' });
Contact.belongsTo(User, { foreignKey: 'userId', allowNull: false, onDelete: 'CASCADE' });

module.exports = Contact;
