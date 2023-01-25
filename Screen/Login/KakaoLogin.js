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

    //event.nativeEvent
    // {"canGoBack": false, "canGoForward": false, "data": "this is message from web", "loading": false, "target": 829, "title": "카카오계정으로 로그인", "url": "https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=13ad45e4f4aaa4c81ecfcbe91f95837a&redirect_uri=/user/kakao/callback"}

    // substringd으로 url에서 code=뒤를 substring하면 된다.
    // console.log("url", data);

    const exp = "code=";
    let condition = data.indexOf(exp);

    if (condition != -1) {
      let request_code = data.substring(condition + exp.length);

      //CtwYs-NSmNGfrPDvBfIvR7_0P_Sw4RMKEdlOUE5e-yIScsEXP1V0bgLoWvLyDf_6-hIiyworDSAAAAGF6TxQ-g
      // console.log("access code :: " + request_code);

      // 토큰값 받기
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
        // client_id: "ic",
        client_id: process.env.REST_API_KEY,
        // client_id: REST_API_KEY,
        // redirect_uri: "url",
        // redirect_uri: process.env.REDIRECT_URI,
        // redirect_uri: REDIRECT_URI,
        code: request_code,
      },
    })
      .then(function (response) {
        // returnValue =
        //   response.data.token_type + " " + response.data.access_token;
        returnValue = response.data.access_token;

        AsyncStorage.setItem("accessToken", returnValue);

        // console.log(returnValue);
        // console.log("data", response.data);

        sendToken(returnValue);
      })
      .catch(function (error) {
        console.log("error", error);
      });
  };

  const sendToken = async (accessToken) => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/members/kakaoLogin?accessToken=${accessToken}`
      );
      console.log("sendToken Res", res);
      navigation.navigate("MainRouMaintes");
    } catch (error) {
      console.log(error);
    }
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
        }}

        // onMessage ... :: webview에서 온 데이터를 event handler로 잡아서 logInProgress로 전달
      />
    </View>
  );
};

export default KakaoLogin;
