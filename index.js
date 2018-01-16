const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const dotenv = require('dotenv');

// initialize environment variables
dotenv.config();

// define constants
const PORT = process.env.PORT;

// initialize express and middlewares
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(morgan('short'));

app.listen(PORT, () => {
  console.log(`Listening in on port: ${PORT}`);
});
