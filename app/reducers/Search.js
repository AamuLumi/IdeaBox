'use strict';

import {
  ADD_FILTER, REMOVE_FILTER, SEARCH, SEARCH_BY_ID
}
from '~/actions/Search';
import DefaultSearchFilters from '~/init/DefaultSearchFilters';
import DefaultSearchResults from '~/init/DefaultSearchResults';

function setActive(element, state) {
  let inactiveFilters = state.inactiveFilters.slice();
  let filter = null;

  for (let i = 0; i < inactiveFilters.length; i++) {
    if (inactiveFilters[i].id === element.id) {
      filter = inactiveFilters[i];
      inactiveFilters.splice(i, 1);
      break;
    }
  }

  let activeFilters = [...state.activeFilters, filter];

  return {
    'activeFilters': activeFilters,
    'inactiveFilters': inactiveFilters
  };
}

function setInactive(element, state) {
  let activeFilters = state.activeFilters.slice();
  let filter = null;

  for (let i = 0; i < activeFilters.length; i++) {
    if (activeFilters[i].id === element.id) {
      filter = activeFilters[i];
      activeFilters.splice(i, 1);
      break;
    }
  }

  let inactiveFilters = [...state.inactiveFilters, filter];

  return {
    'activeFilters': activeFilters,
    'inactiveFilters': inactiveFilters
  };
}

export function searchFilters(state = DefaultSearchFilters,
  action) {
  switch (action.type) {
    case ADD_FILTER:
      return setActive(action, state);
    case REMOVE_FILTER:
      return setInactive(action, state);
    default:
      return state;
  }
}

export function searchResults(state = [], action) {
  switch (action.type) {
    case SEARCH:
      return DefaultSearchResults;
    case SEARCH_BY_ID:
      for (let res of state){
        if (res.id === action.id){
          return [res];
        }
      }
      return [];
    default:
      return state;
  }
}
