import React from 'react';
import Navigator from './src/configs/Navigator';
import {Provider} from 'react-redux';
import store from './src/store/';

const App = () => {
  return (
    <Provider store={store}>
      <Navigator />
    </Provider>
  );
};

export default App;
