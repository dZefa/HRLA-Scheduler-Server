const Promise = require('bluebird');

const db = require('../index');

const User = require('../model/user');
const Contact = require('../model/contact');

module.exports = {
  syncDB: (bool=false) => {
    return new Promise((resolve, reject) => {
      db.authenticate()
        .then(() => {
          console.log(`Database has been authenticated`);
          User.sync({ force: bool })
            .then(() => {
              console.log(`User table synced`);
              Contact.sync({ force: bool })
                .then(() => {
                  console.log(`Contact table synced`);
                  resolve();
                })
                .catch((err) => {
                  console.log(`Error syncing Contact table. Error: ${err}`);
                  reject(err);
                });
            })
            .catch((err) => {
              console.log(`Error syncing User table. Error: ${err}`);
              reject(err);
            });
        })
        .catch((err) => {
          console.log(`Error authenticating database. Error: ${err}`);
          reject(err);
        });
    })
  },
};
