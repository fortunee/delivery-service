import React, { Component } from 'react';

import ShipmentList from './../shipment/ShipmentList';

class Dashboard extends Component {
    render() {
        return (
            <div className="dashboard container">
                <ShipmentList />
            </div>
        )
    }
}

export default Dashboard;
