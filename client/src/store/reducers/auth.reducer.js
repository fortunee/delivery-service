const initialState = {
    authData: {},
    authError: null
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN_ERROR':
            return { ...state, authError: 'Login failed. Please try again' }
        case 'LOGIN_SUCCESS':
            return { ...state, authData: action.authData, authError: null }
        case 'LOGOUT_SUCCESS':
            return state
        default:
            return state;
    }
}

export default authReducer;
