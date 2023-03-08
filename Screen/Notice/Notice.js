import { useIsFocused, useNavigation } from "@react-navigation/native";
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
import useFetchNotice from "../../querys/notice/useFetchNotice";
import IsLoading from "../../Common/Loading/IsLoading";
import useFetchAdmin from "../../querys/notice/useFetchAdmin";

const Notice = () => {
  const navigation = useNavigation();
  const isFocused = useIsFocused();
  const [noticePassword, setNoticePassword] = useState("");
  const [onPost, setOnPost] = useState(false);
  const [adminValue, setAdminValue] = useState(null);

  const onChangePassword = (e) => {
    setNoticePassword((prev) => (prev = e));
  };

  const onPostChange = () => {
    setOnPost(!onPost);
  };

  const onPressHandler = () => {
    if (noticePassword === "artizen666!") {
      navigation.navigate("NoticeRoutes", {
        screen: "NoticePost",
      });
    } else {
      alert("비밀번호가 일치하지않습니다.");
    }
  };

  const onPressAdminButtonHandler = () => {
    adminRefetch();
  };

  const { data: datas, isError, isLoading, refetch, remove } = useFetchNotice();
  const { data: adminData, refetch: adminRefetch } = useFetchAdmin(adminValue);
  console.log(adminData);

  useEffect(() => {
    remove();
    refetch();
  }, [isFocused]);

  if (isLoading) {
    <IsLoading />;
  }
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
                  returnKeyType="enter"
                  secureTextEntry
                />
              </View>
            ) : null}
          </RowBox>
          <TextInput
            onChangeText={(text) => {
              setAdminValue(text);
            }}
          ></TextInput>
          <Button title="관리자 인증" onPress={onPressAdminButtonHandler} />

          <Layout>
            <NoticeImportantList datas={datas?.top5} />
            <Center>
              <NoticeList datas={datas?.notificationList} />
            </Center>
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

const Center = styled(View)`
  flex: 1;
  justify-content: center;
`;

const HiddenText = styled(Text)`
  color: transparent;
`;
