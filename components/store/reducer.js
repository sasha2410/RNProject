import React from 'react';
import { assign } from 'lodash';
import { CHANGE_STEP } from './actions.js';

export default (state = {}, action) => {
  switch (action.type){
    case CHANGE_STEP:
      return assign({}, state, { step: action.step });
    default:
      return state
  }
}