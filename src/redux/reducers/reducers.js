import {combineReducers} from 'redux';

import searchingReducers, {NAME as counterName} from '../features/searching';

export default () => 
    combineReducers({
    [searchingReducers]: searchingReducers,
});