import React, { Component } from 'react';
import { connect } from 'react-redux';

import ShipmentList from './../shipment/ShipmentList';

class Dashboard extends Component {
    render() {
        const { shipments } = this.props;

        return (
            <div className="dashboard container">
                <ShipmentList shipments={shipments} />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        shipments: state.shipment.shipments
    }
}

export default connect(mapStateToProps)(Dashboard);
