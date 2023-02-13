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

const PrNoticeImportantList = ({ datas, navigation }) => {
  return (
    <View>
      {datas?.map((data) => {
        return (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("NoticeRoutes", {
                screen: "NoticeImportantDetail",
                params: { id: data?.id },
              })
            }
          >
            <Layout>
              <LongBox key={data?.id}>
                <FdRow>
                  <BoldTextSky>공지</BoldTextSky>
                  <Title>{data?.title}</Title>
                  <View>
                    <TextGray>{data?.createdAt}</TextGray>
                  </View>
                </FdRow>
              </LongBox>
            </Layout>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default PrNoticeImportantList;

const LongBox = styled.View`
  flex: 1;
  width: 100%;
  height: 54px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: ${Theme.colors.White};
  padding: 5px;
  border-radius: 10px;
  border: 1px solid ${Theme.colors.LightGray};
`;
const FdRow = styled.View`
  flex-direction: row;
  margin: 0 0 0 10px;
  width: 100%;
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
  font-size: 13px;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
`;
const Title = styled(Text)`
  color: ${Theme.colors.Black};
  /* width: 160px; */
  width: 57%;
  font-size: 13px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  word-break: break-all;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
`;
