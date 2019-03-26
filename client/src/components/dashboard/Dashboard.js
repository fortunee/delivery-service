import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import ShipmentList from './../shipment/ShipmentList';

import { fetchAllShipment } from './../../store/actions/shipment.actions';

class Dashboard extends Component {

    componentDidMount = () => {
        this.props.fetchAllShipment();
    }

    render() {
        const { shipments, authData } = this.props;
        if (!authData.userId) return <Redirect to='/login' />

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

Dashboard.propTypes = {
    shipments: PropTypes.array.isRequired,
    authData: PropTypes.object.isRequired,
    fetchAllShipment: PropTypes.func.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
