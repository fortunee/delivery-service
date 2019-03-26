import React from 'react';
import ShipmentDetails from './ShipmentDetails';
import PropTypes from 'prop-types';

const ShipmentList = ({ shipments }) => {
    return (
        <div className="shipment-list">
            { shipments && shipments.map(shipment =>
                <ShipmentDetails  shipment={shipment} key={shipment.id} />
            )}
        </div>
    );
}

ShipmentList.propTypes = {
    shipments: PropTypes.array.isRequired
}

export default ShipmentList;
