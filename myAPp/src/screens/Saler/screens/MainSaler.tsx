/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */

import {
  View,
  Text,
  StatusBar,
  Dimensions,
  Touchable,
  Pressable,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React, {useCallback, useEffect, useRef, useState} from 'react';
import MapView, {Marker, PROVIDER_GOOGLE, UrlTile} from 'react-native-maps';
import {
  IMarker,
  ICamera,
  IRegion,
  IFormAddress,
  IAddress,
} from '../../../models/Maps';
import Geolocation from '@react-native-community/geolocation';
import {
  CloudBookingData,
  DEFAULT_ZOOM_MAP,
  HEIGHT_WINDOW,
  MAX_ZOOM_MAP,
  MIN_ZOOM_MAP,
  PITCH_MAP,
  statusBar,
} from '../../../constants';
import Donut from '../../../components/Donut';
import CloudFlatList from '../../../components/CloudFlatList';
import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';
import DestinationScreen from './DestinationScreen';
import {ROUTES} from '../../../configs/Routes';
import {useNavigation} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import {useAppDispatch} from '../../../redux/store';
import {updateDepature} from '../../../redux/reducers/salerLocationReducer';
import {useSelector} from 'react-redux';
import {AppState} from '../../../redux/reducer';

const defaultAddress: IAddress = {
  name: '',
  thoroughfare: '',
  subThoroughfare: '',
  locality: '',
  subLocality: '',
  administrativeArea: '',
  subAdministrativeArea: '',
  postalCode: '',
  countryCode: '',
  country: '',
};

const MainSaler = () => {
  const _map = useRef<MapView>(null);
  const tabBarHeight = useBottomTabBarHeight();
  const navigation = useNavigation();
  const dispatch = useAppDispatch();
  const user = useSelector((state: AppState) => state.profile);
  console.log('Main: ', user);

  const [formAddress, setFormAddress] = useState<IFormAddress>({
    destination: defaultAddress,
    departure: defaultAddress,
  });
  const [marker, setMarker] = useState<IMarker>({
    id: '1',
    description: '1',
    coordinate: {latitude: 0, longitude: 0},
    title: '1',
  });
  const [camera, setCamera] = useState<ICamera>({
    center: {
      latitude: 37.78825,
      longitude: -122.4324,
    },
    pitch: PITCH_MAP,
    altitude: 0,
    zoom: DEFAULT_ZOOM_MAP,
    heading: 10,
  });

  const onRegionChange = async (region: IRegion) => {
    setMarker({...marker, coordinate: {...region}});
    handleChangeDeparture(region);
  };

  const handleChangeDeparture = async (region: IRegion) => {
    const a = await _map.current?.addressForCoordinate({...region});
    if (a) {
      setFormAddress({...formAddress, departure: {...a}});
    }
  };

  const formatAddress = useCallback(
    (address?: IAddress) => {
      let result = '';
      if (address?.subThoroughfare) result += ', ' + address.subThoroughfare;
      if (address?.thoroughfare) result += ', ' + address.thoroughfare;
      if (address?.subLocality) result += ', ' + address.subLocality;
      if (address?.locality) result += ', ' + address.locality;
      if (address?.subAdministrativeArea)
        result += ', ' + address.subAdministrativeArea;
      if (address?.administrativeArea)
        result += ', ' + address.administrativeArea;
      if (address?.country) result += ', ' + address.country;
      // if (address?.name) result += ', ' + address.name;
      return result.replace(', ', '');
    },
    [formAddress.departure],
  );

  useEffect(() => {
    Geolocation.getCurrentPosition(
      position => {
        setCamera({
          ...camera,
          center: {...position.coords},
        });
        setMarker({...marker, coordinate: {...position.coords}});
      },
      error => {
        if (error) {
          console.log('Faled to Get Current Location!... ', error);
          // Geolocation.requestAuthorization();
          setMarker({
            ...marker,
            coordinate: {...camera.center},
          });
        }
      },
    );
  }, []);

  return (
    <View style={[styles.body]}>
      <MapView
        ref={_map}
        style={styles.mapContainer}
        // initialCamera={{...camera}}
        onRegionChangeComplete={onRegionChange}
        zoomEnabled
        // minZoomLevel={MIN_ZOOM_MAP}
        // maxZoomLevel={MAX_ZOOM_MAP}
        showsUserLocation
        provider={PROVIDER_GOOGLE}>
        <Marker
          identifier={marker.id}
          coordinate={{
            latitude: marker.coordinate.latitude,
            longitude: marker.coordinate.longitude,
          }}
          title={marker.title}
          description={marker.description}
        />
      </MapView>
      <View
        style={[
          styles.bookingContainer,
          {
            top: HEIGHT_WINDOW - statusBar - 180 - tabBarHeight,
          },
        ]}>
        <View style={{flexDirection: 'row'}}>
          <Pressable
            style={styles.tabButton}
            onPress={() => {
              console.log('Đặt ngay!');
            }}>
            <Text style={styles.tabText}>Đặt ngay</Text>
          </Pressable>
          <Pressable
            style={styles.tabButton}
            onPress={() => {
              console.log('Hẹn giờ!');
            }}>
            <Text style={styles.tabText}> Hẹn giờ</Text>
          </Pressable>
        </View>
        <View style={{flexDirection: 'row', width: '100%'}}>
          <View>
            <Donut size={2} color="#007ca7" style={styles.donutView} />
            <View style={styles.groupDotView}>
              <View style={styles.dotView} />
              <View style={styles.dotView} />
              <View style={styles.dotView} />
              <View style={styles.dotView} />
            </View>
            <Donut size={2} color="#bf553d" style={styles.donutView} />
          </View>
          <View style={{justifyContent: 'space-between', marginLeft: 10}}>
            <TouchableOpacity>
              <Text numberOfLines={1}>
                {' '}
                {formatAddress(formAddress.departure) || 'Bạn đang ở đâu?'}
              </Text>
            </TouchableOpacity>
            <View style={styles.lineView} />
            <TouchableOpacity
              onPress={() => {
                // Save to Redux Store
                // dispatch(updateDepature())
                // Naviage Screen
                navigation.navigate(
                  ROUTES.destinationSaler as never,
                  {} as never,
                );
              }}>
              <Text style={{fontSize: 18}}>Tôi muốn đến...</Text>
            </TouchableOpacity>
          </View>
        </View>
        <CloudFlatList
          style={{marginTop: 5, marginLeft: 10}}
          horizontal={true}
          data={CloudBookingData}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
  },
  mapContainer: {
    width: '100%',
    height: HEIGHT_WINDOW - statusBar,
  },
  bookingContainer: {
    backgroundColor: '#fff',
    borderRadius: 5,
    elevation: 5,
    position: 'absolute',
    height: 190,
    width: '90%',
    left: '5%',
  },
  tabText: {
    color: '#28ae70',
    borderColor: '#28ae70',
    borderWidth: 1,
    padding: 5,
    paddingHorizontal: 10,
    borderRadius: 6,
  },
  lineView: {
    height: 0.5,
    width: '100%',
    backgroundColor: 'grey',
  },
  tabButton: {
    margin: 10,
  },
  dotView: {
    backgroundColor: 'grey',
    width: 2,
    height: 2,
    marginLeft: 10 + 2 * 4,
  },
  groupDotView: {
    marginVertical: 5,
    justifyContent: 'space-between',
    height: 25,
  },
  donutView: {
    marginLeft: 10,
  },
});

export default MainSaler;
