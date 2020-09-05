import React from 'react'
import { View, Text } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import ListsScreen from "../screens/BuyedScreens/ListsScreen";

const BuyedStack = createStackNavigator();

const BuyedNavigator = BuyedStack.Navigator;
const BuyedScreen = BuyedStack.Screen;

const BuyedRoutes = () => {
   return (
      <BuyedNavigator>
         <BuyedScreen name="Lists" component={ListsScreen} />
      </BuyedNavigator>
   )
}

export default BuyedRoutes
