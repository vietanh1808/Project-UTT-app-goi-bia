/* eslint-disable @typescript-eslint/no-unused-vars */
import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MainSaler from '../screens/Saler/screens/MainSaler';
import ProfileSaler from '../screens/Saler/screens/ProfileSaler';
import {createNavigationContainerRef} from '@react-navigation/native';
import {ROUTES} from '../configs/Routes';
import DestinationScreen from '../screens/Saler/screens/DestinationScreen';

const Tab = createBottomTabNavigator();
const MainNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={ROUTES.homeSaler}>
      <Tab.Screen name={ROUTES.homeSaler} component={MainSaler} />
      <Tab.Screen name={ROUTES.profileSaler} component={ProfileSaler} />
    </Tab.Navigator>
  );
};

export default MainNavigator;

const styles = StyleSheet.create({});
