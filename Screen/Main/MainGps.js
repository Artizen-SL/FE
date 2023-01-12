import * as Location from "expo-location";
import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, ScrollView, Dimensions } from "react-native";
import styled, { css } from "styled-components/native";
import Theme from "../../Theme/Theme";

const { width: SCREEN_WIDTH } = Dimensions.get("window");

export default function MainGps() {
  const [region, setRegion] = useState("Loading...");
  const [district, setDistrict] = useState();
  const [location, setLocation] = useState();
  const [ok, setOk] = useState(true);
  const ask = async () => {
    try {
      const { granted } = await Location?.requestForegroundPermissionsAsync();
    } catch (error) {
      setOk(false);
    }
    const {
      coords: { latitude, longitude },
    } = await Location?.getCurrentPositionAsync({ accuracy: 5 });
    const location = await Location?.reverseGeocodeAsync(
      { latitude, longitude },
      { useGoogleMaps: false }
    );
    setRegion(location[0]?.region);
    setDistrict(location[0]?.district);
    console.log(location);
  };

  useEffect(() => {
    ask();
  }, []);

  return (
    <UserGps>
      {region} {district}
    </UserGps>
  );
}
const UserGps = styled.Text`
  color: ${Theme.colors.SkyBlue};
 
  font-weight: 700;
`;