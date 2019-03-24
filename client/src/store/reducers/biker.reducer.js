const initialState = {};

const bikerReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'FETCH_BIKERS_SUCCESS': 
          return { ...state, bikers: action.bikers };

        case 'FETCH_BIKERS_ERROR': 
          return { ...state, error: action.error };

        default:
            return state;
    }
}

export default bikerReducer;
