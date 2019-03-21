import React, { Component } from 'react'

class ShipmentEditForm extends Component {
  render() {
    return (
      <div className="container">
        <form className="white">
          <h5 className="grey-text text-darken-3">Edit Shipment</h5>
          <div className="input-field">
            <label htmlFor="parcel">Parcel</label>
            <input type="text" id='parcel' />
          </div>
          <div className="input-field">
            <label htmlFor="origin">Origin</label>
            <input type="text" id='origin' />
          </div>
          <div className="input-field">
            <label htmlFor="destination">Destination</label>
            <input type="text" id='destination' />
          </div> 
          <select className="browser-default">
            <option value="">Choose Assignee</option>
            <option value="Alan">Alan</option>
            <option value="2">Michael</option>
            <option value="3">Alex</option>
          </select>
          <div className="input-field">
            <label htmlFor="order-status">Order Status</label>
            <input type="text" id='order-status' />
          </div>
          <div className="input-field">
            <label htmlFor="timestamp">Time Stamp</label>
            <input type="text" id='timestamp' />
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">Save</button>
          </div>
        </form>
      </div>
    )
  }
}

export default ShipmentEditForm
