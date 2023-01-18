import React from "react";
import { View } from "react-native";
import { WebView } from "react-native-webview";
import axios from "axios";
import { REST_API_KEY, REDIRECT_URI } from "@env";
import qs from "qs";

// other import settings...

const runFirst = `window.ReactNativeWebView.postMessage("this is message from web");`;

const KakaoLogin = ({ navigation }) => {
  const getCode = (target) => {
    const exp = "code=";
    const condition = target.indexOf(exp);
    if (condition !== -1) {
      const requestCode = target.substring(condition + exp.length);
      requestToken(requestCode);
    }
  };

  const requestToken = async (code) => {
    const requestTokenUrl = "https://kauth.kakao.com/oauth/token";

    const options = qs.stringify({
      grant_type: "authorization_code",
      client_id: REST_API_KEY,
      redirect_uri: REDIRECT_URI,
      code,
    });

    try {
      const tokenResponse = await axios.post(requestTokenUrl, options);
      const ACCESS_TOKEN = tokenResponse.data.access_token;

      const body = {
        ACCESS_TOKEN,
      };

      const response = await axios.post(REDIRECT_URI, body);
      const value = response.data;
      console.log(value);
      await navigation.navigate("Main");
      const result = await storeUser(value);
      if (result === "stored") {
        const user = await getData("user");
        dispatch(read_S(user));
      }
    } catch (e) {
      console.log(e);
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
          const data = event.nativeEvent.url;
          getCode(data);
        }}

        // onMessage ... :: webview에서 온 데이터를 event handler로 잡아서 logInProgress로 전달
      />
    </View>
  );
};

export default KakaoLogin;
