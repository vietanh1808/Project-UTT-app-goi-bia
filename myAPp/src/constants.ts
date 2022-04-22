import {Dimensions, StatusBar} from 'react-native';
import {IUserParams} from './models/Saler';

// Map
export const MIN_ZOOM_MAP = 5;
export const MAX_ZOOM_MAP = 18;
export const PITCH_MAP = 0;
export const DEFAULT_ZOOM_MAP = 18;

// Main
export const COLOR_MAIN_TOPIC = '#228b22';

// Screen
export const HEIGHT_WINDOW = Dimensions.get('window').height;
export const statusBar = StatusBar.currentHeight || 0;
export const WIDTH_WINDOW = Dimensions.get('window').width;

// Image Require
export const sourceImage = {
  logoLogin: {
    imgName: 'logo',
    uri: require('./asserts/logo.png'),
  },
};

// Init Value
export const initUserInfor: IUserParams = {
  username: '',
  password: '',
  email: '',
  status: 0,
  authorization: '',
  birthday: '',
  sex: '',
  phone: '',
};

export const CloudBookingData = [
  {id: 1, title: 'Ngõ 11 Duy Tân'},
  {id: 2, title: '200 Đại Từ'},
  {id: 3, title: '15 Cầu Thanh Trì'},
  {id: 4, title: 'Văn Điển'},
  {id: 5, title: '68 Nguyễn Xiển'},
];

// Firebase
export const USER_COLLECTION = 'User';
export const PASSWORD_FIELD = 'password';
export const EMAIL_FIELD = 'email';
export const USERNAME_FIELD = 'username';
export const STATUS_FIELD = 'status';

// AsyncStorage
export const CURRENT_USER = 'currentUser';
