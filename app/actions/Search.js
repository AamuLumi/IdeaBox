'use strict';

export const ADD_FILTER = 'ADD_FILTER';
export const REMOVE_FILTER = 'REMOVE_FILTER';

export function addFilter(filter){
  return {type : ADD_FILTER, filter};
}

export function removeFilter(id){
  return {type : REMOVE_FILTER, id};
}
