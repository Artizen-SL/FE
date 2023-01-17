import * as Location from "expo-location";
import React, { useState, useEffect } from "react";

const useGpsAsk = async () => {
  try {
    const { granted } = await Location?.requestForegroundPermissionsAsync();
    return granted;
  } catch (error) {
    Alert.alert("위치정보를 가져올 수 없습니다.");
  }
};

export default useGpsAsk;
