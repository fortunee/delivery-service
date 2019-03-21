import React from 'react';

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
                    <tr>
                        <td>Eclair</td>
                        <td>Hamburg</td>
                        <td>Berlin</td>
                        <td>Alvin</td>
                        <td>Waiting</td>
                        <td>March 20, 2019</td>
                        <td><a href="#"><i class="tiny material-icons">edit</i></a></td>
                    </tr>
                    <tr>
                        <td>Jellybean</td>
                        <td>Cologne</td>
                        <td>Berlin</td>
                        <td>Alan</td>
                        <td>Picked up</td>
                        <td>March 19, 2019</td>
                        <td><a href="#"><i class="tiny material-icons">edit</i></a></td>
                    </tr>
                    <tr>
                        <td>Lollipop</td>
                        <td>Cologne</td>
                        <td>Hamburg</td>
                        <td>Jonathan</td>
                        <td>Assigned</td>
                        <td>March 10, 2019</td>
                        <td><a href="#"><i class="tiny material-icons">edit</i></a></td>
                    </tr>
                    <tr>
                        <td>Shoes</td>
                        <td>Berlin</td>
                        <td>Lagos</td>
                        <td>Alan</td>
                        <td>Delivered</td>
                        <td>March 21, 2019</td>
                        <td><a href="#"><i class="tiny material-icons">edit</i></a></td>
                    </tr>
                    <tr>
                        <td>Hat</td>
                        <td>Hamburg</td>
                        <td>Cologne</td>
                        <td>Unassigned</td>
                        <td>Waiting</td>
                        <td>March 20, 2019</td>
                        <td><a href="#"><i class="tiny material-icons">edit</i></a></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default ShipmentList;
