const express = require("express");
const logger = require("morgan");

const API_PORT = 3001;
const app = express();
const router = express.Router();

app.use(logger("dev"));

router.post("/login", (req, res) => {
  // login user
});

router.get("/shipment", (req, res) => {
    // Get list of shipments
    res.send('Shipments coming through...');
});

router.get("/bikers", (req, res) => {
    // Get list of bikers
});

router.get("/manager", (req, res) => {
    // Get manager
});

app.use("/api", router);

app.listen(API_PORT, () => console.log(`Server running on https://127.0.0.1:${API_PORT}`));
