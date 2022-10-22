import {configureStore, combineReducers} from '@reduxjs/toolkit';
import calendar from './modules/calendar';

const rootReducer = combineReducers({calendar});
const store = configureStore({reducer: rootReducer});

export default store;
