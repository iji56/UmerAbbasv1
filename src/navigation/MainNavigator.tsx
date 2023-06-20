import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Home from '../screens/Home';
import Accounts from '../screens/Accounts';

const Stack = createStackNavigator();

export default function MainNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Accounts" component={Accounts} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
