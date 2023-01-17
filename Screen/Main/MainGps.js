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
  // return (
  //   <UserGps>
  //     {disAgree === undefined ? (
  //       <Text>위치없음</Text>
  //     ) : (
  //       <>
  //         {gpsRes?.region} {gpsRes?.district}
  //       </>
  //     )}
  //     {/* {gpsRes?.region} {gpsRes?.district} */}
  //   </UserGps>
  // );
}
const UserGps = styled.Text`
  color: ${Theme.colors.SkyBlue};
  font-weight: 700;
`;

// export default function MainGps() {
//   const [region, setRegion] = useState("Loading...");
//   const [district, setDistrict] = useState();
//   const [location, setLocation] = useState();
//   const [ok, setOk] = useState(true);
//   const place = async () => {
//       const granted = useGpsAsk();
//       console.log("granted==>",granted);
//       if(granted){
//         const {
//             coords: { latitude, longitude },
//           } = await Location?.getCurrentPositionAsync({ accuracy: 5 });
//           const location = await Location?.reverseGeocodeAsync(
//             { latitude, longitude },
//             { useGoogleMaps: false }
//           );
//           setRegion(location[0]?.region);
//           setDistrict(location[0]?.district);
//       } else {
//         setOk(false);
//       }

//   };

//   useEffect(() => {
//     place();
//   }, []);

//   return (
//     <UserGps>
//       {region} {district}
//     </UserGps>
//   );
// }
// const UserGps = styled.Text`
//   color: ${Theme.colors.SkyBlue};
//   font-weight: 700;
// `;
