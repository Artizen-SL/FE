import * as Location from "expo-location";
import { useState } from "react";
import useGpsAsk from "./useGpsAsk";

const useGpsRes = async () => {
  const granted = await useGpsAsk();
  let region = "";
  let district = "";
  if (granted) {
    const {
      coords: { latitude, longitude },
    } = await Location?.getCurrentPositionAsync({ accuracy: 5 });
    const location = await Location?.reverseGeocodeAsync(
      { latitude, longitude },
      { useGoogleMaps: false }
    );
    region = location[0].region;
    district = location[0].district;
    return {region, district};
  }
  return region, district;
};

export default useGpsRes;
