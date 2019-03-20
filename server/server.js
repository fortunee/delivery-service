const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');

require('dotenv').config();

const users = require('./mocks/users');
const Auth = require('./auth.middleware');

const API_PORT = 3001;
const app = express();
const router = express.Router();

const secret = process.env.JWT_SECRET || 'SECRET TEXT';

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
  
        res.status(200).send({ token, expiresIn: '2 days' });
    } else {
        res.status(401)
          .send({ message: 'Authentication failed due to invalid credentials.' });
    }
});

router.get("/shipment", Auth.verifyToken, Auth.verifyManager, (req, res) => {
    // Get list of shipments
    res.send('Shipments coming through...');
});

router.get("/bikers", Auth.verifyToken, (req, res) => {
    // Get list of bikers
});

router.get("/manager", Auth.verifyToken, (req, res) => {
    // Get manager
});

app.use("/api", router);

app.listen(
    API_PORT,
    () => console.log(`Server running on https://127.0.0.1:${API_PORT}`)
);
