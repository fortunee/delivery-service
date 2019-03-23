import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchSingleShipment, updateShipment } from './../../store/actions/shipment.actions';
import { fetchBikers } from './../../store/actions/biker.action';

class ShipmentEditForm extends Component {
  state = {
    parcel: '',
    origin: '',
    destination: '',
    assignee: '',
    orderStatus: '',
    timestamp: '',
  }

  componentDidMount = () => {
    this.props.fetchBikers();
    const id = this.props.match.params.id;
    console.log('Single shipment', this.props.fetchSingleShipment(id))
    const currentShipment = this.props.shipment;
    // const currentShipment = this.props.fetchSingleShipment(id);
    this.setState({
      parcel: currentShipment.parcel,
      origin: currentShipment.origin,
      destination: currentShipment.destination,
      assignee: currentShipment.assignee,
      orderStatus: currentShipment.order_status,
      timestamp: currentShipment.timestamp,
    })
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.updateShipment(this.state);
  }

  render() {
    return (
      <div className="container">
        <form className="white" onSubmit={this.handleSubmit}>
          <h5 className="grey-text text-darken-3">Edit Shipment</h5>
          <div className="input-field">
            <label htmlFor="origin">Parcel</label>
            <input type="text" id='parcel' defaultValue={this.state.parcel} onChange={this.handleChange}/>
          </div>
          <div className="input-field">
            <label htmlFor="origin">Origin</label>
            <input type="text" id='origin' defaultValue={this.state.origin} onChange={this.handleChange}/>
          </div>
          <div className="input-field">
            <label htmlFor="destination">Destination</label>
            <input type="text" id='destination' defaultValue={this.state.destination} onChange={this.handleChange}/>
          </div>
          <div className="input-field col s12">
            <select className="browser-default" id="assignee" value={this.state.assignee} onChange={this.handleChange}>
              {this.props.bikers && this.props.bikers.map(biker =>
                <option key={biker.id} value={biker.name}>{biker.name}</option>
              )}
            </select>
          </div>
          <div className="input-field">
            <label htmlFor="orderStatus">Order Status</label>
            <input type="text" id='orderStatus' defaultValue={this.state.orderStatus} onChange={this.handleChange}/>
          </div>
          <div className="input-field">
            <label htmlFor="timestamp">Time Stamp</label>
            <input type="text" id='timestamp' defaultValue={this.state.timestamp} onChange={this.handleChange}/>
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">Save</button>
          </div>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateShipment: shipment => dispatch(updateShipment(shipment)),
    fetchSingleShipment: id => dispatch(fetchSingleShipment(id)),
    fetchBikers: () => dispatch(fetchBikers())
  }
}

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const shipment = state.shipment.shipments.find(shipment => shipment.id == id);
  const bikers = state.bikers.bikers;
  return {
    shipment,
    bikers
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShipmentEditForm);
