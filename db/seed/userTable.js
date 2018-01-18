const Promise = require('bluebird');

const User = require('../model/user');

const Admin = {
  type: 'Admin',
  login: 'Core',
  password: 'hrlacorestaff6060',
  isNew: false,
};

const HiR = {
  type: 'HiR',
  login: 'HiR',
  password: 'hrlahir',
  isNew: false,
};

const seedAdmin = async () => {
  await User.create(Admin)
    .then(user => {
      console.log(`User ${user.type} has been created`);
    })
    .catch(err => {
      console.log(`Error creating Admin user. Error: ${err}`);
    });
};

const seedHiR = async () => {
  await User.create(HiR)
    .then(user => {
      console.log(`User ${user.type} has been created`);
    })
    .catch(err => {
      console.log(`Error creating HiR user. Error: ${err}`);
    });
};

const seedGroups = async (n) => {
  const Group = {
    type: 'Group',
  };
  for(let i = 1; i <= n; i++) {
    Group.login = `Group${i}`;
    Group.password = `hrlasenior${i}`;
    Group.groupName = `Group${i}`;

    await User.create(Group)
      .then(user => {
        console.log(`User ${user.login} has been created`);
      })
      .catch(err => {
        console.log(`Error creating Group. Error: ${err}`);
      });
  }
};

const seedUsers = (n) => {
  return new Promise(async (resolve, reject) => {
    await seedAdmin();
    await seedHiR();
    await seedGroups(n);

    resolve(true);
  });
};

module.exports = { seedUsers };
