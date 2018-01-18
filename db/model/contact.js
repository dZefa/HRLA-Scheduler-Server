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

Contact.belongsTo(User, { foreignKey: 'userId', allowNull: false, onDelete: 'CASCADE' });
User.hasMany(Contact);

module.exports = Contact;
