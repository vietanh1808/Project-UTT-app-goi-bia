import {combineReducers} from '@reduxjs/toolkit';
import {IUserLocation} from '../models/Saler';
import profileReducer, {IProfileState} from './reducers/profileReducer';
import salerLocationReducer from './reducers/salerLocationReducer';

const rootReducer = () => {
  return combineReducers({
    saler: salerLocationReducer,
    profile: profileReducer,
  });
};

export default rootReducer;

export interface AppState {
  profile: IProfileState;
  saler: IUserLocation;
}
