import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../store/actions/auth.actions';

const LoggedInLinks = ({ logout }) => {
    return (
        <ul className="right">
            <li><NavLink to="/manager-dashboard">Dashboard</NavLink></li>
            <li><a onClick={logout}>Logout</a></li>
            <li><NavLink to="/" className="btn btn-floating pink lighten-1">FE</NavLink></li>
        </ul>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(logout())
    }
}

export default connect(null, mapDispatchToProps)(LoggedInLinks);
