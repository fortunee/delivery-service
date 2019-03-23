import React from 'react';
import { Link } from 'react-router-dom';

const ShipmentDetails = ({shipment}) => {
  return (
    <tr>
        <td>{shipment.parcel}</td>
        <td>{shipment.origin}</td>
        <td>{shipment.destination}</td>
        <td>{shipment.assignee}</td>
        <td>{shipment.order_status}</td>
        <td>{shipment.timestamp}</td>
        <td><Link to={`/shipment/${shipment.id}`}><i className="tiny material-icons">edit</i></Link></td>
    </tr>
  )
}

export default ShipmentDetails;
