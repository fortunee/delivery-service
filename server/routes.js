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
            res.status(200).send(bikerShipments);
        }
        res.status(200).send(shipments);
    });
    
    // single shipment endpoint
    router.get("/shipment/:id", (req, res) => {
        const { id } = req.params;
        const shipment = shipments.find(item => item.id == id);
        res.status(200).send(shipment);
    });

    // update shipment endpoint
    router.patch("/shipment/:id", (req, res) => {
        const { id } = req.params;
        const body = req.body;
        console.log('BODY', body)
        const currentShipment = shipments.filter(shipment => shipment.id == id);
        console.log('BODY', currentShipment)

        currentShipment[0].timestamp = body.timestamp || new Date().toLocaleString()
        currentShipment[0].assignee = body.assignee || currentShipment[0].assignee
        currentShipment[0].order_status = body.orderStatus || currentShipment[0].order_status

        // const updatedShipments = shipments
        //                             .map((shipment) => {
        //                                 if (shipment.id == currentShipment.id) {
        //                                     shipment = currentShipment
        //                                 }
        //                                 return shipment;
                                    // })
        res.status(200).send(currentShipment[0]);
    });
    
    // bikers endpoint
    router.get("/bikers", Auth.verifyToken, Auth.verifyManager, (req, res) => {
        const bikers = users.filter(user => user.role !== 'manager');
        res.status(200).send(bikers);
    });    
}

module.exports = routes;
