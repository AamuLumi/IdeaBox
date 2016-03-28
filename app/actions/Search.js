'use strict';

export const ADD_FILTER = 'ADD_FILTER';
export const REMOVE_FILTER = 'REMOVE_FILTER';
export const SEARCH = 'SEARCH';

export function addFilter(id){
  return {type : ADD_FILTER, id};
}

export function removeFilter(id){
  return {type : REMOVE_FILTER, id};
}

export function search(filters){
  return {type : SEARCH, filters};
}
