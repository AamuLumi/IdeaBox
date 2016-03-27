'use strict';

import {combineReducers, createStore} from 'redux';

import {searchFilters} from './Search';

export default createStore(combineReducers({
  searchFilters
}));
