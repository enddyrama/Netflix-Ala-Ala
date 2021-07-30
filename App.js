import 'react-native-gesture-handler';

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppStack from './src/Navigator/AppStack';
import Login from './src/Screen/Login';

import { Provider } from 'react-redux';
import store from './src/Redux/store';


const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <AppStack />
      </NavigationContainer>
    </Provider>
  );
};

export default App;


