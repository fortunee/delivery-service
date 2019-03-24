import axios from 'axios';
import jwt from 'jsonwebtoken';

export const setAuthorizationToken = (token) => {
    if (token) {
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
    } else {
        axios.defaults.headers.common['Authorization'] = undefined;
    }
}

export const setAuthData = (user) => {
    return {
        type: 'LOGIN_SUCCESS',
        authData: user
    }
}

export const login = credetials => {
    return (dispatch) => {
        axios
            .post('http://localhost:3001/api/v1/login', {
                email: credetials.email,
                password: credetials.password
            })
            .then(response => {
                const token = response.data.token;
                localStorage.setItem('jwtToken', token);
                setAuthorizationToken(token);
                console.log(jwt.decode(token));
                const decodedUser = jwt.decode(token);
                dispatch(setAuthData(decodedUser));
            })
            .catch(error => {
                dispatch({ type: 'LOGIN_ERROR' });
            });
    }
}

export const logout = () => {
    return (dispatch) => {
        localStorage.removeItem('jwtToken');
        setAuthorizationToken(false);
        dispatch({ type: 'LOGOUT_SUCCESS' })
    }
}