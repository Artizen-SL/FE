import { useNavigation } from "@react-navigation/native";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
  RCTImageView,
} from "react-native";
import ScrollViewLayout from "../../Components/Layout/ScrollViewLayout";
import Layout from "../../Components/Layout/Layout";
import styled, { css } from "styled-components/native";
import Theme from "../../Theme/Theme";
import NoticeList from "../../Components/Notice/NoticeList";
import NoticeImportantList from "../../Components/Notice/NoticeImportantList";

const Notice = () => {
  const navigation = useNavigation();
  return (
    <View>
      <ImageBackground source={require("../../assets/background/notice.png")}>
        <ScrollViewLayout>
          <RowBox>
            <Logo source={require("../../assets/Icon/notice.png")} />
            <BoldTextBL>공지사항</BoldTextBL>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("NoticeRoutes", {
                  screen: "NoticePost",
                })
              }
            >
              <Text>글쓰기</Text>
            </TouchableOpacity>
          </RowBox>
          <NoticeImportantList />
          <NoticeList />
        </ScrollViewLayout>
      </ImageBackground>
    </View>
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
