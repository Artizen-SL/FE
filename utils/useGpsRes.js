import * as Location from "expo-location";
import { useState } from "react";
import useGpsAsk from "./useGpsAsk";
import useFetchLocation from "../querys/Main/useFetchLocation";

const useGpsRes = async () => {
  const granted = await useGpsAsk();
  let region = "";
  let district = "";
  let disagree = "";
  if (granted) {
    const {
      coords: { latitude, longitude },
    } = await Location?.getCurrentPositionAsync({ accuracy: 5 });
    const location = await Location?.reverseGeocodeAsync(
      
      { latitude, longitude },
      { useGoogleMaps: false }
    );
    region = location[0]?.region;
    district = location[0]?.district;
    console.log("location",latitude)
    return { region, district,latitude,longitude };
  } else {
    disagree = "Loding";
  }

  return region, district, disagree,latitude,longitude;
};

export default useGpsRes;
