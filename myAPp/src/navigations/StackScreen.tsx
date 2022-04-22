/* eslint-disable @typescript-eslint/no-unused-vars */
import {AsyncStorage, StyleSheet, Text, View} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {ROUTES} from '../configs/Routes';
import DestinationScreen from '../screens/Saler/screens/DestinationScreen';
import MainNavigator from './MainNavigator';
import LoginScreen from '../screens/authen/LoginScreen';
import RegisterScreen from '../screens/authen/RegisterScreen';
import HomeDriver from '../screens/Driver/HomeDriver';
import {useSelector} from 'react-redux';
import {CURRENT_USER} from '../constants';
import {AppState} from '../redux/reducer';

const Stack = createStackNavigator();

const StackScreen = () => {
  const user = useSelector((state: AppState) => state.profile);

  // const authenScreen = () => {
  //   console.log('Current User: ', user);
  //   switch (user?.authorization) {
  //     case 's':
  //       return ROUTES.mainSaler;
  //     case 'd':
  //       return ROUTES.mainDriver;
  //     default:
  //       return ROUTES.login;
  //   }
  // };
  console.log('User: ', user);

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={ROUTES.login}>
      {/* initialRouteName={authenScreen()}> */}
      <Stack.Screen
        name={ROUTES.destinationSaler}
        component={DestinationScreen}
      />
      <Stack.Screen name={ROUTES.mainDriver} component={HomeDriver} />
      <Stack.Screen name={ROUTES.mainSaler} component={MainNavigator} />
      <Stack.Screen name={ROUTES.login} component={LoginScreen} />
      <Stack.Screen name={ROUTES.register} component={RegisterScreen} />
    </Stack.Navigator>
  );
};

export default StackScreen;

const styles = StyleSheet.create({});
