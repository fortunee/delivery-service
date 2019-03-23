const initialState = {
    shipments: [
        {
            id: 1,
            parcel: 'Tshirt',
            timestamp: Date.now(),
            origin: 'Cologne',
            destination: 'Lagos',
            assignee: 'Unassigned',
            order_status: 'Waiting'
          },
          {
            id: 2,
            parcel: 'Hat',
            timestamp: Date.now(),
            origin: 'Berlin',
            destination: 'Abuja',
            assignee: 'John',
            order_status: 'Picked up'
          },
          {
            id: 3,
            parcel: 'Sneakers',
            timestamp: Date.now(),
            origin: 'Hamburg',
            destination: 'Cologne',
            assignee: 'Moritz',
            order_status: 'Deliverd'
          }
    ]
};

const shipmentReducer = (state = initialState, action) => {
    return state;
}

export default shipmentReducer;
