import Geolocation from 'react-native-geolocation-service';
import React, { useState } from "react";

const useReGpsRes = async () => {
  try {
    const { accuracy ,district,region} = await Location.watchPositionAsync();
    return accuracy ,district,region;
  } catch (error) {
    console.log(error);
  }
};

export default useReGpsRes;