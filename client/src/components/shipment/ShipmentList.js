import React from 'react';
import ShipmentDetails from './ShipmentDetails';

const ShipmentList = ({ shipments }) => {
    return (
        <div className="shipment-list">
            <table className="highlight responsive-table">
                <thead>
                <tr>
                    <th>Parcel</th>
                    <th>Origin</th>
                    <th>Destination</th>
                    <th>Assignee</th>
                    <th>Order Status</th>
                    <th>Time Stamp</th>
                    <th>Edit</th>
                </tr>
                </thead>

                <tbody>
                    { shipments && shipments.map(shipment => {
                        return (
                            <ShipmentDetails  shipment={shipment} key={shipment.id} />
                        )
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default ShipmentList;
