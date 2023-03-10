import * as Location from "expo-location";
import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, ScrollView, Dimensions } from "react-native";
import styled, { css } from "styled-components/native";
import Theme from "../../Theme/Theme";
import useGpsRes from "../../utils/useGpsRes";

export default function MainGps() {
  const [gpsRes, setGpsRes] = useState({ region: "Loading...", district: "" });
  const [disAgree, setDisAgree] = useState();

  useEffect(async () => {
    const [region, district, disagree] = await useGpsRes();
    setGpsRes({ ...gpsRes, region: region, district: district });
    setDisAgree(disagree);   
  }, [useGpsRes()]);

  return gpsRes,disAgree;
}
const UserGps = styled.Text`
  color: ${Theme.colors.SkyBlue};
  font-weight: 700;
`;
