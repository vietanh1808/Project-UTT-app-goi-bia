/* eslint-disable @typescript-eslint/no-unused-vars */
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {ILocation, IRegion} from '../../models/Maps';
import {IUserLocation, IUserParams} from '../../models/Saler';
import {initUserInfor} from '../../constants';

const initGeoLocation: IRegion = {
  latitude: 0,
  longitude: 0,
  latitudeDelta: 0,
  longitudeDelta: 0,
};

export const initState: IUserLocation = {
  userInfo: initUserInfor,
  geoLocationFrom: initGeoLocation,
  geoLocationTo: initGeoLocation,
  timestamp: new Date().getTime(),
  streetTo: '',
  streetFrom: '',
};

const salerLocationSlice = createSlice({
  name: 'saler',
  initialState: initState,
  reducers: {
    updateDepature: (state, action: PayloadAction<IRegion>) => {
      return {...state, geoLocationFrom: action.payload};
    },
    updateDestination: (state, action: PayloadAction<IRegion>) => {
      return {
        ...state,
        geoLocationTo: action.payload,
      };
    },
    updateStreetTo: (state, action: PayloadAction<string>) => {
      return {
        ...state,
        street: action.payload,
      };
    },
    updateStreetFrom: (state, action: PayloadAction<string>) => {
      return {
        ...state,
        street: action.payload,
      };
    },
    updateUserInfo: (state, action: PayloadAction<IUserParams>) => {
      return {
        ...state,
        userInfo: action.payload,
      };
    },
    updateTimestamp: (state, action: PayloadAction<number>) => {
      return {
        ...state,
        timestamp: action.payload,
      };
    },
  },
});

export default salerLocationSlice.reducer;

export const {
  updateDepature,
  updateDestination,
  updateStreetTo,
  updateStreetFrom,
  updateTimestamp,
  updateUserInfo,
} = salerLocationSlice.actions;
