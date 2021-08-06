
import { createStore, combineReducers } from 'redux';
import shopReducer from './reduce/shoppingReducer';
import gameReducer from './reduce/gameXucXac';
import gameReducerOtt from './reduce/gameOanTuTI'
import bookingReducer from './reduce/bookingReducer'
import listGheReducer from './reduce/testBooking'
const rootReducer =combineReducers({
    shopReducer,
    gameReducer,
    gameReducerOtt,
    bookingReducer,
    listGheReducer
})
const store = createStore(rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;
