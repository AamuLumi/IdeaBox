'use strict';

export const CHANGE_CURRENT_PROJECT = 'CHANGE_CURRENT_PROJECT';

export function changeCurrentProject(project){
  return {type : CHANGE_CURRENT_PROJECT, project};
}
