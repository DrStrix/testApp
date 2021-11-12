import { createStore, combineReducers } from 'redux';
import HomeReducer from './reducers/home.reducer';


const rootReducer = combineReducers({
    home_data: HomeReducer
});

const configureStore = () => {
    return createStore(rootReducer);
}

export default configureStore;