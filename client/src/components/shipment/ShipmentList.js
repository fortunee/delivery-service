import React from 'react';
import ShipmentDetails from './ShipmentDetails';

const ShipmentList = () => {
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
                    <ShipmentDetails />
                    <ShipmentDetails />
                    <ShipmentDetails />
                    <ShipmentDetails />
                </tbody>
            </table>
        </div>
    );
}

export default ShipmentList;
