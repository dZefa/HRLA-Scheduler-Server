const User = require('../model/user');

module.exports = {
  getAllUserGroups: async (req, res) => {
    await User.findAll()
      .then(users => {
        res.status(202).send({ result: users });
      })
      .catch(err => {
        res.status(500).send(err);
      })
  },
  addUserGroup: async (req, res) => {
    const group = req.body;

    await User.findOrCreate({
      where: { login: group.login },
      defaults: {
        type: group.type,
        password: group.password,
        groupName: group.login,
        isNew: group.isNew,
      }
    })
      .spread((user, created) => {
        if (!created) {
          res.status(403).send({ result: user });
        } else {
          res.status(201).send({ result: user });
        }
      })
      .catch(err => {
        res.status(500).send(err);
      });
  },
  editUserGroup: async (req, res) => {
    const login = req.params.name;
    const group = req.body;

    await User.update(group, {
      where: { login },
    })
      .then((count) => {
        res.status(200).send({ result: count });
      })
      .catch(err => {
        res.status(500).send(err);
      });
  },
  deleteUserGroup: async (req, res) => {
    const login = req.params.name;

    await User.destroy({
      where: { login },
    })
      .then(count => {
        res.status(202).send({ result: count });
      })
      .catch(err => {
        res.status(500).send(err);
      });
  }
};
