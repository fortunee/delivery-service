import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import LoggedInLinks from './LoggedInLinks';
import LoggedOutLinks from './LoggedOutLinks';

const Navbar = ({ auth }) => {
    const links = auth.userId ? <LoggedInLinks /> : <LoggedOutLinks />
    return (
        <nav className="nav-wrapper grey darken-3">
            <div className="container">
                <Link to="/" className="brand-logo">Monica Delivery Service</Link>
                { links }
            </div>
        </nav>
    )
}

const mapStateToProps = state => {
    return {
        auth: state.auth.authData
    }
}  

export default connect(mapStateToProps)(Navbar);
