import * as Location from "expo-location";
import React, { useState, useEffect } from "react";

export default function useGpsAsk() {
  const ask = async () => {
    try {
      const { granted } = await Location?.requestForegroundPermissionsAsync();   
      return granted;   
    } catch (error) {
     console.log(error);
    };   
}
};
