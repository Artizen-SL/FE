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
  return (
    <ScrollViewLayout>
      <ImageBackground
        source={require("../../assets/background/notice.png")}
      >
        < RowBox>
          <Logo source={require("../../assets/Icon/notice.png")} />
          < BoldTextBL>공지사항</ BoldTextBL>
        </ RowBox>
        <NoticeImportantList />
        <NoticeList />
      </ImageBackground>
    </ScrollViewLayout>
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