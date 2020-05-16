/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import Main from './components/main.js';
import createAppStore from './components/store/store.js';
import { Provider } from 'react-redux';

const initialState = { step: 1 };
const store = createAppStore(initialState);

const App: () => React$Node = () => {
  return (
    <Provider store={ store }>
      <Main/>
    </Provider>
  );
};

export default App;
