import React from "react";
import { View } from "react-native";
import { WebView } from "react-native-webview";
import { REST_API_KEY, LOGOUT_REDIRECT_URI, REACT_APP_BASE_URL } from "@env";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useSetAtom } from "jotai";
import { isLoggedInAtom } from "../../Jotai/atoms/authAtoms";
/* Constant variables */
const EXPIRE_URI = `https://kauth.kakao.com/oauth/logout?client_id=${REST_API_KEY}&logout_redirect_uri=${LOGOUT_REDIRECT_URI}`;
const runFirst = `window.ReactNativeWebView.postMessage("this is message from web");`; /* Do not erase */

const KakaoLogout = () => {
  const navigation = useNavigation();
  const setIsLoggedIn = useSetAtom(isLoggedInAtom);

  const logout = async () => {
    try {
      // const accessToken = await AsyncStorage.getItem("accessToken");
      // const res = await axios.get(
      //   `${REACT_APP_BASE_URL}/members/logout?accessToken=${accessToken}`
      // );

      // navigation.navigate("MainRoutes");
      await AsyncStorage.removeItem("accessToken");
      await AsyncStorage.removeItem("refreshToken");
      setIsLoggedIn(false);
      navigation.navigate("MainTab");
    } catch (error) {}
  };

  return (
    <View style={{ flex: 1 }}>
      <WebView
        originWhitelist={["*"]}
        scalesPageToFit={false}
        style={{ marginTop: 30 }}
        source={{ uri: EXPIRE_URI }}
        injectedJavaScript={runFirst}
        onMessage={(event) => {
          logout(event.nativeEvent);
        }}
      />
    </View>
  );
};

export default KakaoLogout;
