export interface ILatLng {
  latitude: number;
  longitude: number;
}

export interface IPoint {
  x: number;
  y: number;
}

export interface ICamera {
  center: ILatLng;
  pitch: number;
  heading: number;
  altitude: number; // Only on iOS MapKit, in meters. The property is ignored by Google Maps.
  zoom: number; // Only when using Google Maps.
}

export interface ILocation {
  latitude: number;
  longitude: number;
  altitude: number; // Only on iOS MapKit, in meters. The property is ignored by Google Maps.
  timestamp: number; //Milliseconds since Unix epoch
  accuracy: number;
  altitudeAccuracy: number;
  speed: number;
}

export interface IFrame {
  x: number;
  y: number;
  width: number;
  height: number;
}

export enum MapType {
  'standard',
  'satellite',
  'hybrid',
  'terrain', //Android only
}

export interface IEdgePadding {
  top: number;
  right: number;
  bottom: number;
  left: number;
}

export interface IEdgeInsets {
  top: number;
  left: number;
  bottom: number;
  right: number;
}

export interface IMarker {
  id: string;
  coordinate: ILatLng;
  title: string;
  description: string;
}

export interface IKmlContainer {
  markers: IMarker[];
}

export interface IIndoorBuilding {
  underground: boolean;
  activeLevelIndex: number;
  levels: Array<IIndoorLevel>;
}

export interface IIndoorLevel {
  index: number;
  name: string;
  shortName: string;
}

export interface IAddress {
  name: string | null;
  thoroughfare: string | null;
  subThoroughfare: string | null;
  locality: string | null;
  subLocality: string | null;
  administrativeArea: string | null;
  subAdministrativeArea: string | null;
  postalCode: string | null;
  countryCode: string | null;
  country: string | null;
}

export interface IRegion {
  latitude: number;
  longitude: number;
  latitudeDelta: number;
  longitudeDelta: number;
}

export interface IMapView {
  width: number;
  height: number;
  marker?: IMarker;
  camera?: ICamera;
  region?: IRegion;
}

export interface IFormAddress {
  departure: IAddress;
  destination: IAddress;
}
