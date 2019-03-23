import React, { Component } from 'react';
import { connect } from 'react-redux';

import ShipmentList from './../shipment/ShipmentList';

import { fetchShipment } from './../../store/actions/shipment.actions';

class Dashboard extends Component {

    componentDidMount = () => {
        this.props.fetchShipment();
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

const mapStateToProps = (state) => {
    return {
        shipments: state.shipment.shipments
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchShipment: () =>  dispatch(fetchShipment())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
