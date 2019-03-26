# delivery-service
A fictional delivery service company that collects and delivers parcels for people by hired bikers.

### Application features

- A list of users with a role of `manager` or `biker`.
- User with a `biker` role is able to:
    - Login and see only shipments that are assigned to them on the dashboard.
    - Update the order status and timestamp of every order.
    - Logout of the application.
- User with `manager` role is able to:
    - Login and see a list all shipments available on the dashboard.
    - Assign a shipment to a biker by selecting from a list of bikers.
    - Logout of the application.
- A list of shipments with the following information:
    - Parcel
    - Origin
    - Order status  - WAITING | ASSIGNED | PICKED_UP | DELIVERED
    - Timestamp
- An updated shipment can be viewed by the `manager` or `biker` as the case may be

### Tools/Technologies

- Javascript/Node(ES6)
- React
- React router
- Materializecss
- Redux
- Thunk
- Express
- JWT (jsonwebtoken)

### Local setup for contributions

1. Clone the repo `git clone https://github.com/fortunee/delivery-service.git`
2. Change directory into the folder `cd delivery-service
3. Run `npm install`
4. Create a `.env` file and add a `JWT_SECRET` to it - Please see the `.env.sample` file
5. Run `npm start`
6. Navigate wth the browser to `http://localhost:8080/` or whatever host shown in the terminal
