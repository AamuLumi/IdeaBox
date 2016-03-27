'use strict';

import {ADD_FILTER, REMOVE_FILTER} from '~/actions/Search';

export function searchFilters(state = [], action){
  switch (action.type){
    case ADD_FILTER:
      return [
        ...state,
        action.filter
      ];
    case REMOVE_FILTER:
      let currentState = state.slice();

      for (let i = 0; i < currentState.length; i++){
        if (currentState[i].id === action.id){
          currentState.splice(i, 1);
          break;
        }
      }

      return currentState;
    default:
      return state;
  }
}
