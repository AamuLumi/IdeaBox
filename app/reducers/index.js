'use strict';

import {combineReducers, createStore} from 'redux';

import {searchFilters, searchResults} from './Search';
import {getProjectDetails} from './ProjectDetails';

export default createStore(combineReducers({
  searchFilters,
  searchResults,
  getProjectDetails
}));
