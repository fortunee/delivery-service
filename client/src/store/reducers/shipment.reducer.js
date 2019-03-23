const initialState = {
    shipments: [
        {
            id: 1,
            parcel: 'Tshirt',
            timestamp: new Date().toLocaleString("en-US"),
            origin: 'Cologne',
            destination: 'Lagos',
            assignee: 'Unassigned',
            order_status: 'Waiting'
          },
          {
            id: 2,
            parcel: 'Hat',
            timestamp: new Date().toLocaleString("en-US"),
            origin: 'Berlin',
            destination: 'Abuja',
            assignee: 'John',
            order_status: 'Picked up'
          },
          {
            id: 3,
            parcel: 'Sneakers',
            timestamp: new Date().toLocaleString("en-US"),
            origin: 'Hamburg',
            destination: 'Cologne',
            assignee: 'Moritz',
            order_status: 'Deliverd'
          }
    ]
};

const shipmentReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_SINGLE_SHIPMENT':
        return { ...state, singleShipment: action.shipment };

      case 'UPDATE_SHIPMENT':
        console.log(action.shipment);
    }
    return state;
}

export default shipmentReducer;
