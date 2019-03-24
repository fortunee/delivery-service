const initialState = {
    authData: {},
    authError: null
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN_ERROR':
            console.log('login error');
            return { ...state, authError: 'Login failed. Please try again' }
        case 'LOGIN_SUCCESS':
            console.log('login success');
            return { ...state, authData: action.authData, authError: null }
        default:
            return state;
    }
}

export default authReducer;
