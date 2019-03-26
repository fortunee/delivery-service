import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import { updateShipment, fetchAllShipment } from './../../store/actions/shipment.actions';
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
    const authData = this.props.authData;

    if (authData.role === 'manager') {
      this.props.fetchBikers();
    }

    this.props.fetchAllShipment()

    if (this.props.shipment) {
      this.populateFormFields(this.props.shipment)
    }
  }

  componentDidUpdate(prevProps) {
    if (!prevProps.shipment  && this.props.shipment) {
      this.populateFormFields(this.props.shipment)
    }
  }

  populateFormFields = (currentShipment) => {
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
    const id = this.props.match.params.id;
    const update = { ...this.state, id }
    this.props.updateShipment(update);
    this.props.history.push('/');
  }

  render() {
    const { authData } = this.props;
    if (!authData.userId) return <Redirect to='/login' />

    return (
      <div className="container">
        <form className="white" onSubmit={this.handleSubmit}>
          <h5 className="grey-text text-darken-3">Edit Shipment</h5>
          <div className="input-field">
            <label
              className={this.state.parcel ? "active" : ""}
              htmlFor="origin"
            >
              Parcel
            </label>
            <input type="text" 
                   id='parcel'
                   defaultValue={this.state.parcel} 
                   onChange={this.handleChange}
            />
          </div>

          <div className="input-field">
            <label
              className={this.state.origin ? "active" : ""}
              htmlFor="origin"
            >
              Origin
            </label>
            <input
              type="text"
              id='origin'
              defaultValue={this.state.origin}
              onChange={this.handleChange}
            />
          </div>

          <div className="input-field">
            <label
              className={this.state.destination ? "active" : ""}
              htmlFor="destination"
            >
              Destination
            </label>
            <input
              type="text"
              id='destination'
              defaultValue={this.state.destination}
              onChange={this.handleChange}
            />
          </div>

          <div className="input-field col s12">
            <select
              className="browser-default"
              id="assignee"
              value={this.state.assignee}
              onChange={this.handleChange}
            >
                {
                  this.props.bikers && this.props.bikers.length ?
                    this.props.bikers.map(biker => 
                              <option key={biker.id} value={biker.name}>{biker.name}</option>
                            ) 
                            :  <option value={this.state.assignee}>{this.state.assignee}</option>
                }
              </select>
          </div>

          <div className="input-field">
            <label
              className={this.state.orderStatus ? "active" : ""}
              htmlFor="orderStatus"
            >
                Order Status
            </label>
            <input
              type="text"
              id='orderStatus'
              defaultValue={this.state.orderStatus}
              onChange={this.handleChange}
            />
          </div>

          <div className="input-field">
            <label
              className={this.state.timestamp ? "active" : ""}
              htmlFor="timestamp"
            >
              Timestamp
            </label>
            <input
              type="text"
              id='timestamp'
              defaultValue={this.state.timestamp}
              onChange={this.handleChange}/>
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
    fetchAllShipment: () => dispatch(fetchAllShipment()),
    fetchBikers: () => dispatch(fetchBikers())
  }
}

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const shipment = state.shipment.shipments.find(shipment => shipment.id == id);
  return {
    shipment,
    bikers: state.bikers.bikers,
    authData: state.auth.authData
  }
}

ShipmentEditForm.propTypes = {
  shipment: PropTypes.object,
  bikers: PropTypes.array,
  authData: PropTypes.object.isRequired,
  updateShipment: PropTypes.func.isRequired,
  fetchAllShipment: PropTypes.func.isRequired,
  fetchBikers: PropTypes.func,
}

export default connect(mapStateToProps, mapDispatchToProps)(ShipmentEditForm);
