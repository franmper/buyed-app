import React, {useState} from 'react';
import {View, Text} from 'react-native';
import BuyedRoutes from '../../routes/BuyedStack';
import AuthRoutes from '../../routes/AuthStack';
import { NavigationContainer } from '@react-navigation/native';
import { useStoreState } from 'easy-peasy';

const HomeScreen = () => {
  const userToken = useStoreState(state => state.user.user.jwt)
  const user = useStoreState(state => state.user.user)
  const isSignedIn = useStoreState(state => state.user.isSignedIn)

  console.log(user)

  return (
    <NavigationContainer>
      {isSignedIn ? (
        <BuyedRoutes />
      ) : (
        <AuthRoutes />
      )}
    </NavigationContainer>
  );
};

export default HomeScreen;
