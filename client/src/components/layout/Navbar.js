import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import LoggedInLinks from './LoggedInLinks';
import LoggedOutLinks from './LoggedOutLinks';

const Navbar = ({ authData }) => {
    const links = authData.userId ? <LoggedInLinks /> : <LoggedOutLinks />
    return (
        <nav className="nav-wrapper grey darken-3">
            <div className="container">
                <Link to="/" className="brand-logo">Cologne Delivery Service</Link>
                { links }
            </div>
        </nav>
    )
}

const mapStateToProps = ({ auth: { authData }}) => {
    return {
        authData
    }
}

Navbar.propTypes = {
    authData: PropTypes.object.isRequired
}

export default connect(mapStateToProps)(Navbar);
