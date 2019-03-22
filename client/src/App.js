import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Navbar from './components/layout/Navbar';
import Dashboard from './components/dashboard/Dashboard';
import ShipmentEditForm from './components/shipment/ShipmentEditForm';
import Login from './components/auth/Login';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Navbar />
                    <Switch>
                        <Route path='/manager-dashboard' component={Dashboard}/>
                        <Route path='/biker-dashboard' component={Dashboard}/>
                        <Route path='/shipment/:id' component={ShipmentEditForm} />
                        <Route path='/login' component={Login} />
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
}

export default App;
