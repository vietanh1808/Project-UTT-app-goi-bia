import {IRegion} from './Maps';

export interface IUserLocation {
  streetFrom: string;
  streetTo: string;
  geoLocationFrom: IRegion;
  geoLocationTo: IRegion;
  userInfo: IUserParams;
  timestamp: number;
}

export interface IUserParams {
  username: string;
  password: string;
  email: string;
  status: number;
  salary?: number;
  authorization: string;
  birthday: string;
  sex: string;
  phone: string;
}
