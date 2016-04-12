'use strict';

import {CHANGE_CURRENT_PROJECT} from '~/actions/ProjectDetails';

export function getProjectDetails(state = {}, action){
  switch (action.type){
    case CHANGE_CURRENT_PROJECT:
      return action.project;
    default:
      return state;
  }
}
