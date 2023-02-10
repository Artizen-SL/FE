import React from "react";
import { Alert, View } from "react-native";
import { WebView } from "react-native-webview";
import axios from "axios";
import { REST_API_KEY, REDIRECT_URI, REACT_APP_BASE_URL } from "@env";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { isLoggedInAtom } from "../../Jotai/atoms/authAtoms";
import { useAtom, useAtomValue, useSetAtom } from "jotai";

// other import settings...

const runFirst = `window.ReactNativeWebView.postMessage("this is message from web");`;

const KakaoLogin = () => {
  const navigation = useNavigation();
  const isLoggedIn = useAtomValue(isLoggedInAtom);
  const setIsLoggedIn = useSetAtom(isLoggedInAtom);

  console.log("isLoggedIn", isLoggedIn);

  function LogInProgress(data) {
    const exp = "code=";
    let condition = data.indexOf(exp);

    if (condition != -1) {
      let request_code = data.substring(condition + exp.length);

      requestToken(request_code);
    }
  }

  const requestToken = async (request_code) => {
    let returnValue = "none";

    let request_token_url = "https://kauth.kakao.com/oauth/token";

    axios({
      method: "post",
      url: request_token_url,
      params: {
        grant_type: "authorization_code",
        client_id: process.env.REST_API_KEY,
        code: request_code,
      },
    })
      .then(function (response) {
        returnValue = response.data.access_token;
        sendToken(returnValue);
      })
      .catch(function (error) {
        console.log("error", error);
      });
  };

  const sendToken = async (kakaoAccessToken) => {
    try {
      const res = await axios.get(
        `${REACT_APP_BASE_URL}/members/kakaoLogin?accessToken=${kakaoAccessToken}`
      );
      const {
        data,
        headers: { authorization },
        status,
      } = res;

      const accessToken = authorization;
      const refreshToken = res.headers["refresh-token"];

      // console.log(res);

      if (status === 200 && accessToken) {
        AsyncStorage.setItem("accessToken", accessToken);
        AsyncStorage.setItem("refreshToken", refreshToken);
        setIsLoggedIn(true);
        navigation.navigate("MainTab");
      }
    } catch (error) {
      Alert.alert("Error", `${error}`, [
        {
          text: "Error",
          style: "cancel",
        },
      ]);
      console.log(error);
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <WebView
        originWhitelist={["*"]}
        scalesPageToFit={false}
        style={{ marginTop: 30 }}
        source={{
          uri: `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}`,
        }}
        injectedJavaScript={runFirst}
        javaScriptEnabled={true}
        onMessage={(event) => {
          LogInProgress(event.nativeEvent["url"]);
        }}

        // onMessage ... :: webview에서 온 데이터를 event handler로 잡아서 logInProgress로 전달
      />
    </View>
  );
};

export default KakaoLogin;
