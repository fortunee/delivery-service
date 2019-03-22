import React from 'react';

const ShipmentDetails = ({shipment}) => {
  return (
    <tr>
        <td>{shipment.parcel}</td>
        <td>{shipment.origin}</td>
        <td>{shipment.destination}</td>
        <td>{shipment.assignee}</td>
        <td>{shipment.order_status}</td>
        <td>{shipment.timestamp}</td>
        <td><a href="/shipment/3"><i className="tiny material-icons">edit</i></a></td>
    </tr>
  )
}

export default ShipmentDetails;
