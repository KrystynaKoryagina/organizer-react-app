// Core
import { combineReducers } from 'redux';

// Reducers
import {
    profileReducer as profile,
    taskReducer as tasks,
} from '../reducers';


export const rootReducer = combineReducers({
    profile,
    tasks,
});
