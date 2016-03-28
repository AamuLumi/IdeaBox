'use strict';

import {combineReducers, createStore} from 'redux';

import {searchFilters, searchResults} from './Search';

export default createStore(combineReducers({
  searchFilters,
  searchResults
}));
