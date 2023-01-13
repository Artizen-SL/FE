import * as Location from "expo-location";
import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, ScrollView, Dimensions } from "react-native";
import styled, { css } from "styled-components/native";
import Theme from "../../Theme/Theme";
import useGpsAsk from "../../utils/useGpsAsk";
import useGpsRes from "../../utils/useGpsRes";

export default function MainGps() {
  const [gpsRes,setGpsRes]=useState({region:"Loading...",district:""})
  const gps = useGpsRes();
  console.log('gps===>',gps);
    useEffect(async() => {
    const {region,district} = await gps;
    console.log("region,district===>",region,district)    
    setGpsRes({...gpsRes,region:region, district:district});
    // useGpsRes();
  }, []);
  console.log("gpsRes===>",gpsRes)
  return (
    <UserGps>
      {gpsRes?.region} {gpsRes?.district}
    </UserGps>
  );
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
