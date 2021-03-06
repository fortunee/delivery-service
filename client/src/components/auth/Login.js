import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import { login } from '../../store/actions/auth.actions';

class Login extends Component {
    state = {
        email: '',
        password: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.login(this.state);
    }
    
    render() {
        const { authError, authData } = this.props;

        if (authData.userId) return <Redirect to='/' />

        return (
        <div className="container">
            <div className="center red-text">
              { authError ? <p>{authError}</p> : null }
            </div>
            <form onSubmit={this.handleSubmit} className="white">
                <h5 className="grey-text text-darken-3">Login</h5>
                <div className="input-field">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" onChange={this.handleChange} />
                </div>

                <div className="input-field">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" onChange={this.handleChange} />
                </div>

                <div className="input-field">
                    <button className="btn pink lighten-1 z-depth-0">Login</button>
                </div>
            </form>
        </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        login: credentials => dispatch(login(credentials))
    }
}

const mapStateToProps = ({ auth: { authError, authData } }) => {
    return {
        authError,
        authData
    }
}

Login.propTypes = {
    authError: PropTypes.string,
    authData: PropTypes.object,
    login: PropTypes.func.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
