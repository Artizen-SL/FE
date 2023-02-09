import { useNavigation } from "@react-navigation/native";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
  RCTImageView,
  TextInput,
  Button,
  ScrollView,
} from "react-native";
import ScrollViewLayout from "../../Components/Layout/ScrollViewLayout";
import Layout from "../../Components/Layout/Layout";
import styled, { css } from "styled-components/native";
import Theme from "../../Theme/Theme";
import NoticeList from "../../Components/Notice/NoticeList";
import NoticeImportantList from "../../Components/Notice/NoticeImportantList";
import { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const Notice = () => {
  const navigation = useNavigation();
  const [noticePassword, setNoticePassword] = useState("");
  const [onPost, setOnPost] = useState(false);
  const onChangePassword = (e) => {
    setNoticePassword((prev) => (prev = e));
    console.log(e);
  };
  const onPostChange = () => {
    setOnPost(!onPost);
  };
  const onPressHandler = () => {
    if (noticePassword === "1111") {
      navigation.navigate("NoticeRoutes", {
        screen: "NoticePost",
      });
    } else {
      alert("비밀번호가 일치하지않습니다.");
    }
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <ImageBackground source={require("../../assets/background/notice.png")}>
          <RowBox>
            <Logo source={require("../../assets/Icon/notice.png")} />
            <BoldTextBL>공지사항</BoldTextBL>
            <TouchableOpacity
              onPress={() => {
                onPostChange();
              }}
            >
              <HiddenText>글쓰기</HiddenText>
            </TouchableOpacity>
            {onPost === true ? (
              <View>
                <TextInput
                  value={noticePassword}
                  name="noticePassword"
                  onChangeText={(e) => onChangePassword(e)}
                  onSubmitEditing={onPressHandler}
                  placeholder="password"
                  returnKeyType="none"
                  secureTextEntry
                />
              </View>
            ) : null}
          </RowBox>
          <Layout>
            <NoticeImportantList />
            <NoticeList />
          </Layout>
        </ImageBackground>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Notice;

const Logo = styled(Image)`
  width: 30px;
  height: 30px;
`;

const BoldTextBL = styled(Text)`
  color: ${Theme.colors.Black};
  font-size: 20px;
  font-weight: bold;
  align-items: center;
  justify-content: center;
  margin-left: 6px;
`;
const RowBox = styled(View)`
  flex-direction: row;
  align-items: center;
  margin: 10px 0 0 20px;
`;

const HiddenText = styled(Text)`
  color: transparent;
`;
