const db = require('../index');

const User = require('../model/user');
const Contact = require('../model/contact');

module.exports = {
  syncDB: (bool=false) => {
    db.authenticate()
      .then(() => {
        console.log(`Database has been authenticated`);
        User.sync({ force: bool })
          .then(() => {
            console.log(`User table synced`);
            Contact.sync({ force: bool })
              .then(() => {
                console.log(`Contact table synced`);
              })
              .catch((err) => {
                console.log(`Error syncing Contact table. Error: ${err}`);
              });
          })
          .catch((err) => {
            console.log(`Error syncing User table. Error: ${err}`);
          });
      })
      .catch((err) => {
        console.log(`Error authenticating database. Error: ${err}`);
      });
  },
};
