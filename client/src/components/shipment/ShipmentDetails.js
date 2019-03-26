import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const ShipmentDetails = ({shipment}) => {
  return (
    <ul className="collection">
      <li className="collection-item avatar">
        <i className="material-icons circle pink">folder</i>
        <p><span className="shipment-title">Parcel: </span>{shipment.parcel}</p>
        <p><span className="shipment-title">Origin: </span>{shipment.origin}</p>
        <p><span className="shipment-title">Destination: </span>{shipment.destination}</p>
        <p><span className="shipment-title">Assignee: </span>{shipment.assignee}</p>
        <p><span className="shipment-title">Order Status: </span>{shipment.order_status}</p>
        <p><span className="shipment-title">Timestamp: </span>{shipment.timestamp}</p>
        <Link to={`/shipment/${shipment.id}`} className="secondary-content"><i className="material-icons">edit</i></Link>
      </li>
  </ul>
  )
}

ShipmentDetails.propTypes = {
  shipment: PropTypes.object.isRequired
}

export default ShipmentDetails;
