/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useCallback, useEffect} from 'react';
import {AppRegistry, SafeAreaView, StyleSheet, LogBox} from 'react-native';
import {Provider} from 'react-redux';
import RouteApp from './RouteApp';
import {name as appName} from './app.json';
import {PersistGate} from 'redux-persist/integration/react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {CURRENT_USER} from './src/constants';
import {updateProfile} from './src/redux/reducers/profileReducer';
import {IUserParams} from './src/models/Saler';
import store, {persistor} from './src/redux/store';

LogBox.ignoreLogs([
  'deprecated-react-native-prop-types',
  'react-native-gesture-handler',
  'AsyncStorage has been extracted from react-native core',
]);

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RouteApp />
      </PersistGate>
    </Provider>
  );
};

export default App;
