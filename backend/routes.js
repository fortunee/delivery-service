const jwt = require('jsonwebtoken');

const users = require('./mocks/users');
const shipments = require('./mocks/shipments');
const Auth = require('./auth.middleware');

const secret = process.env.JWT_SECRET || 'SECRET TEXT';

const routes = router => {
    // login endpoint
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
    
    // shipment endpoint
    router.get("/shipment", Auth.verifyToken, (req, res) => {
        const user = req.decoded;
        if (user.role !== 'manager') {
            const bikerShipments = shipments.filter(shipment => shipment.assignee === user.name);
            return res.status(200).send(bikerShipments);
        }
        res.status(200).send(shipments);
    });

    // update shipment endpoint
    router.patch("/shipment/:id", Auth.verifyToken, (req, res) => {
        const { id } = req.params;
        const body = req.body;
        const { role } = req.decoded;

        const [ currentShipment ] = shipments.filter(shipment => shipment.id == id);

        if (Object.keys(currentShipment).length > 0) {
            currentShipment.assignee = body.assignee || currentShipment.assignee;
            currentShipment.order_status = body.orderStatus || currentShipment.order_status;
            
            if (role == 'biker') currentShipment.timestamp = new Date().toLocaleString();

            return res.status(200).send(currentShipment);
        }

        return res.status(404).send('Shipment not found')
    });
    
    // bikers endpoint
    router.get("/bikers", Auth.verifyToken, Auth.verifyManager, (req, res) => {
        const bikers = users.filter(user => user.role !== 'manager');
        res.status(200).send(bikers);
    });    
}

module.exports = routes;
