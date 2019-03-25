import React from 'react';
import ShipmentDetails from './ShipmentDetails';

const ShipmentList = ({ shipments }) => {
    return (
        <div className="shipment-list">
            { shipments && shipments.map(shipment => {
                return (
                    <ShipmentDetails  shipment={shipment} key={shipment.id} />
                )
            })}
        </div>
    );
}

export default ShipmentList;
