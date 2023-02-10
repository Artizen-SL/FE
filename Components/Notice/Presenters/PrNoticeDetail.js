import {
  StyleSheet,
  View,
  Text,
  Button,
  Image,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
} from "react-native";
import styled, { css } from "styled-components/native";
import Theme from "../../../Theme/Theme";
import ScrollViewLayout from "../../Layout/ScrollViewLayout";
import { SafeAreaView } from "react-native-safe-area-context";
import Layout from "../../Layout/Layout";

const PrNoticeDetail = ({ 
  id,
  delNotice,
  setDelNotice,
  delPassword,
  onPressHandler,
  onDelChange,
  onChangePassword,
  data,
 }) => {
  return (
    <SafeAreaView>
    <Left>
      <RowBox style={{ marginTop: 30 }}>
        <Logo source={require("../../../assets/Icon/notice.png")} />
        <BoldTextBL>공지사항</BoldTextBL>
      </RowBox>
    </Left>
    <ScrollViewLayout>
      <Center>
        <NoticeImage source={{ uri: data?.imageUrl }} />
        <TouchableOpacity onPress={onDelChange}>
          <Text>삭제</Text>
        </TouchableOpacity>
        {delNotice === true ? (
          <>
            <TextInput
              value={delPassword}
              name="delPassword"
              onChangeText={(e) => onChangePassword(e)}
              placeholder="password"
              returnKeyType="enter"
              secureTextEntry
            />
            <Button title="삭제" onPress={() => onPressHandler(id)} />
          </>
        ) : null}
        <GrayLine></GrayLine>
      </Center>
      <Left>
        <RowBox style={{ marginBottom: 5 }}>
          <BoldTextSky>공지</BoldTextSky>
          <BoldTextBL>{data?.title}</BoldTextBL>
        </RowBox>
        <TextGray style={{ marginBottom: 20 }}>{data?.createdAt}</TextGray>
        <TextDarkGray>{data?.content}</TextDarkGray>
      </Left>
    </ScrollViewLayout>
  </SafeAreaView>
  );
};

export default PrNoticeDetail;

const Logo = styled(Image)`
  width: 30px;
  height: 30px;
`;

const NoticeImage = styled(Image)`
  width: 90%;
  height: 200px;
  border-radius: 10px;
`;
const GrayLine = styled.View`
  width: 90%;
  height: 1px;
  background-color: ${Theme.colors.LightGray};
  margin: 40px 0 20px 0;
`;

const BoldTextBL = styled(Text)`
  color: ${Theme.colors.Black};
  font-size: 20px;
  font-weight: bold;
  align-items: center;
  justify-content: center;
  margin-left: 6px;
`;
const BoldTextSky = styled(Text)`
  color: ${Theme.colors.SkyBlue};
  font-size: 20px;
  font-weight: bold;
  align-items: center;
  justify-content: center;
  margin-left: 6px;
`;
const TextGray = styled(Text)`
  color: ${Theme.colors.Gray};
  font-size: 16px;
  align-items: center;
  justify-content: center;
  margin-left: 2%;
`;
const TextDarkGray = styled(Text)`
  color: ${Theme.colors.DarkGray};
  font-size: 16px;
  align-items: center;
  justify-content: center;
  margin-left: 2%;
`;
const RowBox = styled(View)`
  flex-direction: row;
  align-items: center;
`;
const Center = styled(View)`
  flex-direction: column;
  align-items: center;
  justify-content: center;
  justify-items: center;
`;

const Left = styled(View)`
  margin: 0 5% 0 5%;
`;
