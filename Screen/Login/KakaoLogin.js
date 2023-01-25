import React from "react";
import { View } from "react-native";
import { WebView } from "react-native-webview";
import axios from "axios";
import { REST_API_KEY, REDIRECT_URI } from "@env";
import { useNavigation } from "@react-navigation/native";
import { AsyncStorage } from "react-native";
// other import settings...

const runFirst = `window.ReactNativeWebView.postMessage("this is message from web");`;

const KakaoLogin = () => {
  const navigation = useNavigation();
  function LogInProgress(data) {
    // access code는 url에 붙어 장황하게 날아온다.

    // substringd으로 url에서 code=뒤를 substring하면 된다.

    const exp = "code=";
    let condition = data.indexOf(exp);

    if (condition != -1) {
      let request_code = data.substring(condition + exp.length);

      console.log("access code :: " + request_code);

      AsyncStorage.setItem(
        "accessToken",
        JSON.stringify({ accessToken: request_code }),
        () => {
          console.log("유저정보 저장 완료");
        }
      );
      AsyncStorage.getItem("accessToken", (err, result) => {
        const token = JSON.parse(result);
        console.log("토큰 나와라 미친자슥아 : " + token.accessToken); // 출력 => 닉네임 : User1
      });
      // 토큰값 받기
    }
  }

  const requestToken = async (request_code) => {
    var returnValue = "none";

    // var request_token_url = "https://kauth.kakao.com/oauth/token";

    axios({
      method: "post",
      // url: request_token_url,
      params: {
        grant_type: "authorization_code",
        // client_id: "ic",
        client_id: process.env.REST_API_KEY,
        // client_id: REST_API_KEY,
        // redirect_uri: "url",
        redirect_uri: process.env.REDIRECT_URI,
        // redirect_uri: REDIRECT_URI,
        code: request_code,
      },
    })
      .then(function (response) {
        returnValue = response.data.access_token;
        console.log("data", response.data);
        navigation.navigate("MainRoutes");
      })
      .catch(function (error) {
        console.log("error", error);
      });
  };

  // const 토큰쭈삼 = async () => {
  //   // var request_token_url = "https://kauth.kakao.com/oauth/token";

  //   axios({
  //     method: "get",
  //     url: "http://3.35.26.37:8080/members/token",
  //   })
  //     .then(function (response) {
  //       console.log("응답", response);
  //       AsyncStorage.setItem(
  //         "accessToken",
  //         JSON.stringify({ accessToken: response.토큰 }),
  //         () => {
  //           console.log("유저정보 저장 완료");
  //         }
  //       );
  //       AsyncStorage.getItem("accessToken", (err, result) => {
  //         const token = JSON.parse(result);
  //         console.log("토큰 나와라 미친자슥아 : " + token.accessToken); // 출력 => 닉네임 : User1
  //       });
  //     })
  //     .catch(function (error) {
  //       console.log("error", error);
  //     });
  // };

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
          console.log(event.nativeEvent);
          navigation.navigate("Main");
        }}

        // onMessage ... :: webview에서 온 데이터를 event handler로 잡아서 logInProgress로 전달
      />
    </View>
  );
};

export default KakaoLogin;
