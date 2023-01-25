import React from "react";
import { View } from "react-native";
import { WebView } from "react-native-webview";
import { REST_API_KEY, LOGOUT_REDIRECT_URI } from "@env";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";
/* Constant variables */
const EXPIRE_URI = `https://kauth.kakao.com/oauth/logout?client_id=${REST_API_KEY}&logout_redirect_uri=${LOGOUT_REDIRECT_URI}`;
const runFirst = `window.ReactNativeWebView.postMessage("this is message from web");`; /* Do not erase */

/**
 * 카카오와 함께 로그아웃.
 *
 * 해당 함수를 호출 하기 전 id를 파기하는 과정 필요
 */
const KakaoLogout = () => {
  // let accessToken = "none";

  // async function getUsersTotalInfo(token) {
  //   setAccessToken(token);
  //   var answer = await requestUserInfo();
  //   return answer;
  // }

  // function setAccessToken(token) {
  //   accessToken = token;
  // }
  // async function requestUserInfo() {
  //   const instance = axios.create();
  //   instance.defaults.headers.common["Authorization"] = accessToken;
  //   var returnValue;
  //   let test = "NVzVYN7764oxdiXG6IlFxwiXVVtoDDcsGAuYfzvECj1y6gAAAYXJ_u-V";
  //   await instance
  //     .get("http://3.35.26.37:8080/members/logout", {
  //       headers: {
  //         accessToken: accessToken,
  //       },
  //       params: {
  //         // grant_type: "authorization_code",

  //         accessToken: test,
  //       },
  //     })
  //     .then(function (response) {
  //       console.log("logout :: " + response["data"]);
  //       returnValue = response["data"];
  //     })
  //     .catch(function (error) {
  //       // TODO :: set returnValue by error code
  //       console.log(error);
  //       returnValue = null;
  //     });
  //   return returnValue;
  // }
  const navigation = useNavigation();
  // const header = "o8XFSYOJPz4xtNx6eb3cBHjTu6PEevxlw9wvroVyCj1y6wAAAYXJxtC8";
  const logout = () => {
    //   axios
    //     .get(`http://3.35.26.37:8080/members/logout`, {
    //       body: {
    //         accessToken: header,
    //       },

    //       params: {
    //         // grant_type: "authorization_code",

    //         accessToken: header,
    //       },
    //     })
    //     .then(function (response) {
    //       returnValue = "none";
    //       console.log("data", response.data);
    //       navigation.navigate("Main");
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
          source={{ uri: EXPIRE_URI }}
          injectedJavaScript={runFirst}
          // onMessage={() => {
          //   logout();
          //   navigation.navigate("Main");
          // }}
        />
      </View>
    );
  };
};
export default KakaoLogout;
