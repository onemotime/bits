import React from 'react';
import { Provider } from 'react-redux';
import MainStackNavigator from './navigations/MainStackNavigator';
import store from './featrues/store';

const App = () => {

  return (
    <Provider store={store}>
      <MainStackNavigator />
    </Provider>
  );
};

export default App;
