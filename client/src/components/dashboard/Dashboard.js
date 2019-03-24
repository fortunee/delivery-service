import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import ShipmentList from './../shipment/ShipmentList';

import { fetchAllShipment } from './../../store/actions/shipment.actions';

class Dashboard extends Component {

    componentDidMount = () => {
        this.props.fetchAllShipment();
    }

    render() {
        const { shipments, authData } = this.props;
        if (!authData.message) return <Redirect to='/login' />

        return (
            <div className="dashboard container">
                <ShipmentList shipments={shipments} />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        shipments: state.shipment.shipments,
        authData: state.auth.authData
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchAllShipment: () =>  dispatch(fetchAllShipment())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
