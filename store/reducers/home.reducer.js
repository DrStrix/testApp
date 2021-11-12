import { HOME_DATA_APPEND_FETCH, HOME_DATA_APPEND_SET, HOME_DATA_FETCH, HOME_DATA_SET } from "../actions/home.action";


const initialState = {
    data: [],
    fetching: false,
    error: false,
  };
  
  const HomeReducer = (state = initialState, action) => {
    switch(action.type) {
        case HOME_DATA_FETCH:
            return {
                ...state,
                data: [],
                fetching: true,
                error: false,
            };
        case HOME_DATA_SET:
            return {
                ...state,
                data: action.payload.data,
                fetching: false,
                error: action.payload.error,
            };
        case HOME_DATA_APPEND_FETCH:
            return {
                ...state,
                error: false,
            };
        case HOME_DATA_APPEND_SET:
            console.log('set', state.data, action.payload.data);
            return {
                ...state,
                data: state.data.concat(action.payload.data),
                fetching: false,
                error: action.payload.error,
            };
        default:
            return state;
    }
  }
  
  export default HomeReducer;