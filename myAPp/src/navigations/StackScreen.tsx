/* eslint-disable @typescript-eslint/no-unused-vars */
import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {ROUTES} from '../configs/Routes';
import DestinationScreen from '../screens/Saler/screens/DestinationScreen';
import MainNavigator from './MainNavigator';

const Stack = createStackNavigator();

const StackScreen = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={'MainScreen'}>
      <Stack.Screen
        name={ROUTES.destinationSaler}
        component={DestinationScreen}
      />
      <Stack.Screen name="MainScreen" component={MainNavigator} />
    </Stack.Navigator>
  );
};

export default StackScreen;

const styles = StyleSheet.create({});
