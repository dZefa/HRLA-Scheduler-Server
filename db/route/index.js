const express = require('express');

const { getAllUserGroups, addUserGroup, editUserGroup, deleteUserGroup } = require('../controller/userController');
const { getAllContacts, addGroupContacts, addSingleContact, editContact, deleteContact } = require('../controller/contactController');

const router = express.Router();

router.route('/users')
  .get(getAllUserGroups)
  .post(addUserGroup);

router.route('/user/name=:name')
  .patch(editUserGroup)
  .delete(deleteUserGroup);

router.route('/contacts/groupId=:id')
  .get(getAllContacts)
  .post(addGroupContacts);

router.route('/contact/groupId=:id')
  .post(addSingleContact);

router.route('/contact/id=:id')
  .patch(editContact)
  .delete(deleteContact);

module.exports = router;