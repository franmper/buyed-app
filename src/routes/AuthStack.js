import React from 'react';
import {View, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import SignInScreen from '../screens/AuthScreens/SignInScreen';
import SignUpScreen from '../screens/AuthScreens/SignUpScreen';
import * as colors from '../utils/colors';

const AuthStack = createStackNavigator();

const AuthNavigator = AuthStack.Navigator;
const AuthScreen = AuthStack.Screen;

const AuthRoutes = () => {
  return (
    <AuthNavigator>
      <AuthScreen
        name="SignIn"
        component={SignInScreen}
        options={{
          headerShown: false,
        }}
      />
      <AuthScreen
        name="SignUp"
        component={SignUpScreen}
        options={{
          headerShown: false,
        }}
      />
    </AuthNavigator>
  );
};

export default AuthRoutes;
