import 'react-native-gesture-handler';
import React from 'react';
import HomeScreen from './src/screens/HomeScreen';
import {StoreProvider} from 'easy-peasy';
import store from './src/store';

const App = () => {
  return (
    <StoreProvider store={store}>
      <HomeScreen />
    </StoreProvider>
  );
};
export default App;
