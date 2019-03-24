const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
var cors = require('cors')

require('dotenv').config();

const users = require('./mocks/users');
const shipments = require('./mocks/shipments');
const Auth = require('./auth.middleware');

const API_PORT = 3001;
const app = express();
const router = express.Router();

const secret = process.env.JWT_SECRET || 'SECRET TEXT';

app.use(cors());
app.use(logger("dev"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

router.post("/login", (req, res) => {
    const { email, password } = req.body;

    const user = users.find((user) => user.email === email);

    if (user && user.password === password) {
        const token = jwt.sign({
            userId: user.id,
            name: user.name,
            email: user.email,
            role: user.role
          }, secret, { expiresIn: '2 days' });
  
        res.status(200).send({ message: true, token });
    } else {
        res.status(401)
          .send({ message: 'Authentication failed due to invalid credentials.' });
    }
});

router.get("/shipment", Auth.verifyToken, (req, res) => {
    const user = req.decoded;
    if (user.role === 'manager') {
        res.status(200).send(shipments);
    }

    if (user.role === 'biker') {
        const bikerShipments = shipments.filter(shipment => shipment.assignee === user.name);
        res.status(200).send(bikerShipments);
    }
});

router.get("/shipment/:id", (req, res) => {
    const { id } = req.params;
    const shipment = shipments.find(item => item.id == id);
    res.status(200).send(shipment);
});

router.get("/bikers", Auth.verifyToken, Auth.verifyManager, (req, res) => {
    const bikers = users.filter(user => user.role !== 'manager');
    res.status(200).send(bikers);
});

app.use("/api/v1", router);

app.listen(
    API_PORT,
    () => console.log(`Server running on https://127.0.0.1:${API_PORT}`)
);
