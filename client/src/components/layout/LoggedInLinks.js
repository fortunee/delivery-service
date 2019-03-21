import React from 'react';
import { NavLink } from 'react-router-dom';

const LoggedInLinks = () => {
    return (
        <ul className="right">
            <li><NavLink to="/">Logout</NavLink></li>
            <li><NavLink to="/" className="btn btn-floating pink lighten-1">FE</NavLink></li>
        </ul>
    )
}

export default LoggedInLinks;
