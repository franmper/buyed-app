import React from 'react'
import { View, Text } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import SignInScreen from "../screens/AuthScreens/SignInScreen";
import SignUpScreen from "../screens/AuthScreens/SignUpScreen";

const AuthStack = createStackNavigator();

const AuthNavigator = AuthStack.Navigator;
const AuthScreen = AuthStack.Screen;

const AuthRoutes = () => {
   return (
      <AuthNavigator>
         <AuthScreen name="SignIn" component={SignInScreen} />
         <AuthScreen name="SignUp" component={SignUpScreen} />
      </AuthNavigator>
   )
}

export default AuthRoutes
