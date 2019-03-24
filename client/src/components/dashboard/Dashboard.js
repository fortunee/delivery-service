import React, { Component } from 'react';
import { connect } from 'react-redux';

import ShipmentList from './../shipment/ShipmentList';

import { fetchAllShipment } from './../../store/actions/shipment.actions';

class Dashboard extends Component {

    componentDidMount = () => {
        this.props.fetchAllShipment();
    }

    render() {
        const { shipments } = this.props;

        return (
            <div className="dashboard container">
                <ShipmentList shipments={shipments} />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        shipments: state.shipment.shipments
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchAllShipment: () =>  dispatch(fetchAllShipment())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
