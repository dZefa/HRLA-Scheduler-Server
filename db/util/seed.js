const dotenv = require('dotenv');

// initialize environment variables
dotenv.config();

const { seedUsers } = require('../seed/userTable');

// define constants
const script = process.argv[2];

if (!script) {
  throw Error(`Please enter number of Groups to be made`);
  process.exit();
}

try {
  seedUsers(Number(script))
    .then(() => {
      process.exit();
    })
} catch (err) {
  console.log(`Error seeding. Error: ${err}`);
  process.exit(1);
}
