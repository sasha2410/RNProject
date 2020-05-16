import React from 'react';
import { createStore } from 'redux';
import reducer from './reducer.js';

export default createAppStore = (initialState) => { return createStore(reducer, initialState); };