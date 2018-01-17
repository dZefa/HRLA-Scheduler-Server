const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const dotenv = require('dotenv');

// initialize environment variables
dotenv.config();

// import database sync method
const { syncDB } = require('./db/util/syncDB');

// define constants
const PORT = process.env.PORT;
const DIST_PATH = path.resolve(__dirname, process.env.DIST_PATH); // remove path.resolve if path is not local
const INDEX_HTML_PATH = path.resolve(__dirname, process.env.INDEX_HTML_PATH); // remove path.resolve if path is not local

// initialize express and middlewares
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(morgan('short'));

// serve static files and catch routes
app.use(express.static(DIST_PATH));
app.get('/*', (req, res) => {
  res.sendFile(INDEX_HTML_PATH);
});

app.listen(PORT, () => {
  console.log(`Listening in on port: ${PORT}`);
  syncDB(); // Pass in true if you would like to force true
});
