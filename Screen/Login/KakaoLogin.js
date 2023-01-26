import React from "react";
import { View } from "react-native";
import { WebView } from "react-native-webview";
import axios from "axios";
import { REST_API_KEY, REDIRECT_URI, REACT_APP_BASE_URL } from "@env";
import { useNavigation } from "@react-navigation/native";
import { AsyncStorage } from "react-native";
// other import settings...

const runFirst = `window.ReactNativeWebView.postMessage("this is message from web");`;

const KakaoLogin = () => {
  const navigation = useNavigation();
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

        AsyncStorage.setItem("accessToken", returnValue);

        sendToken(returnValue);
      })
      .catch(function (error) {
        console.log("error", error);
      });
  };

  const sendToken = async (accessToken) => {
    try {
      const res = await axios.get(
        `${REACT_APP_BASE_URL}/members/kakaoLogin?accessToken=${accessToken}`
      );
      console.log("sendToken Res", res);
      navigation.navigate("MainRoutes");
    } catch (error) {
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
