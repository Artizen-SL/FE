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

const PrNoticeList = ({ datas, navigation }) => {
  return (
    // <View style={{ borderWidth: 1, flex: 1, justifyContent: "center", alignItems:"center" }}>
    <View style={{}}>
      {datas?.map((data) => {
        return (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("NoticeRoutes", {
                screen: "NoticeDetail",
                params: { id: data?.id },
              })
            }
          >
            <Layout>
              <NoticeBox key={data?.id}>
                <View>
                  <FdRow>
                    <Title>{data?.title}</Title>
                    <TextGray>{data?.createdAt}</TextGray>
                  </FdRow>
                  <Content style={{ marginTop: 5, marginBottom: 5 }}>
                    {data?.content}
                  </Content>
                  <GrayLine></GrayLine>
                </View>
              </NoticeBox>
            </Layout>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default PrNoticeList;

const NoticeBox = styled.View`
  flex: 1;
  width: 90%;
  height: 60px;
  flex-direction: row;
  align-items: center;
  justify-items: center;
  justify-content: space-between;
`;
const GrayLine = styled.View`
  width: 100%;
  height: 1px;
  background-color: ${Theme.colors.LightGray};
`;
const FdRow = styled.View`
  flex-direction: row;
  align-items: center;
  /* margin: 0 0 0 10px; */
`;

const BoldTextSky = styled(Text)`
  color: ${Theme.colors.SkyBlue};
  font-size: 13px;
  font-weight: bold;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
`;

const TextGray = styled(Text)`
  color: ${Theme.colors.Gray};
  font-size: 10px;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
`;

const Content = styled(Text)`
  color: ${Theme.colors.Gray};
  font-size: 10px;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
  max-width: 300px;
  min-width: 10px;
  height: 13px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  word-break: break-all;
  word-wrap: break-word;
  text-align: left;
`;
const Title = styled(Text)`
  color: ${Theme.colors.Black};
  max-width: 210px;
  min-width: 10px;
  font-size: 13px;
  font-weight: 700;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  word-break: break-all;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
`;

const Center = styled(View)`
  flex-direction: column;
  align-items: center;
  justify-content: center;
  justify-items: center;
`;
