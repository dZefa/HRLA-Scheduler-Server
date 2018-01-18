const Contact = require('../model/contact');

module.exports = {
  getAllContacts: async (req, res) => {
    const groupId = req.params.id;

    await Contact.findAll({
      where: { userId: groupId },
    })
      .then(contacts => {
        res.status(200).send({ result: contacts });
      })
      .catch(err => {
        res.status(500).send(err);
      });
  },
  addGroupContacts: async (req, res) => {
    const contacts = req.body.contacts;
    const groupId = req.params.id;
    const results = [];

    for(let i = 0; i < contacts.length; i++) {
      contacts[i].userId = groupId;
      await Contact.create(contacts[i])
        .then(user => {
          results.push(user.name);
        })
        .catch(err => {
          res.status(500).send(err);
        });
    }

    res.status(201).send({ results });
  },
  addSingleContact: async (req, res) => {
    const groupId = req.params.id;
    const contact = req.body;
    
    contact.userId = groupId;

    await Contact.create(contact)
      .then(user => {
        res.status(201).send({ result: user });
      })
      .catch(err => {
        res.status(500).send(err);
      });
  },
  editContact: async (req, res) => {
    const id = req.params.id;
    const contact = req.body;

    await Contact.update(contact, {
      where: { id }
    })
      .then(count => {
        res.status(202).send({ result: count });
      })
      .catch(err => {
        res.status(500).send(err);
      });
  },
  deleteContact: async (req, res) => {
    const id = req.params.id;

    await Contact.destroy({
      where: { id },
    })
      .then(count => {
        res.status(202).send({ result: count });
      })
      .catch(err => {
        res.status(500).send(err);
      });
  }
};
