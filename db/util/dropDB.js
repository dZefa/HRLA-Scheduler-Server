const dotenv = require('dotenv');

dotenv.config();

const { syncDB } = require('./syncDB');

syncDB(true)
  .then(() => {
    process.exit();
  })
  .catch(err => {
    process.exit(1);
  });
