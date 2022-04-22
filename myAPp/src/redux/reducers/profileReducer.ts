/* eslint-disable @typescript-eslint/no-unused-vars */
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {ILocation, IRegion} from '../../models/Maps';
import {IUserLocation, IUserParams} from '../../models/Saler';
import {initUserInfor} from '../../constants';

export interface IProfileState {
  user?: IUserParams;
  auth?: boolean;
}

const profileState: IProfileState = {};

const profileSlice = createSlice({
  name: 'profile',
  initialState: profileState,
  reducers: {
    updateProfile: (state, action: PayloadAction<IProfileState>) => {
      console.log('Action: ', action);
      return {...state, user: action.payload.user, auth: action.payload.auth};
    },
  },
});

export default profileSlice.reducer;

export const {updateProfile} = profileSlice.actions;
