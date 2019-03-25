const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');

const routes = require('./routes');

require('dotenv').config();

const API_PORT = 3001;
const app = express();
const router = express.Router();

app.use(cors());
app.use(logger("dev"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

routes(router);
app.use("/api/v1", router);

app.listen(
    API_PORT,
    () => console.log(`Server running on http://127.0.0.1:${API_PORT}`)
);
