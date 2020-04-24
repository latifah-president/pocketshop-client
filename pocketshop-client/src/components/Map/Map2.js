import React, { useState } from "react";
import {
  withGoogleMap,
  GoogleMap,
  withScriptjs,
  InfoWindow,
  Marker,
} from "react-google-maps";
import Geocode from "react-geocode";
Geocode.setApiKey("AIzaSyACyWqCu-iEyiOllOjUp_gNIJHorM75ddk");
Geocode.enableDebug();

export const Map2 = () => {
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [mapPositionLat, setMapPositionLat] = useState(30.292352);
  const [mapPositionLon, setMapPositionLon] = useState(-97.741009);
  const [markerPositionLon, setMarkerPositionLon] = useState(30.292352);
  const [markerPositionLon, setMarkerPositionLon] = useState(-97.741009);

  return <div></div>;
};
