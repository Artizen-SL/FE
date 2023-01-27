import * as React from "react";
import {
  StyleSheet,
  View,
  Text,
  Button,
  Image,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import styled, { css } from "styled-components/native";

const Login = ({ navigation }) => {
  return (
    <StView style={[styles.row]}>
      <ImageBackground
        source={require("../../assets/login/Login_BG.png")}
        style={styles.bgImage}
      >
        <LogoView>
          <Image source={require("../../assets/login/logo_v1_3.png")} />
          <LogoText>전시부터 공연까지! 우리들만의 문화 놀이터!</LogoText>
        </LogoView>
        <LoginView>
          <TouchableOpacity onPress={() => navigation.navigate("KakaoLogin")}>
            <Image source={require("../../assets/login/kakao.png")} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("KakaoLogout")}>
            <Text>로그아웃</Text>
          </TouchableOpacity>
        </LoginView>
      </ImageBackground>
    </StView>
  );
};

export default Login;

const StView = styled.View`
  flex: 1;
`;
const LogoView = styled.View`
  flex: 6;
  align-items: center;
  justify-content: center;
`;
const LoginView = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;
const LogoText = styled.Text`
  color: #fff;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-weight: 400;
  font-size: 15px;
  margin-top: 15px;
`;
const styles = StyleSheet.create({
  header: {
    flex: 1,
  },
  bgImage: { width: "100%", height: "100%" },
});
