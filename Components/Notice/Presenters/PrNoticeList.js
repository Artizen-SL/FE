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

const PrNoticeList = ({ datas }) => {
  return (
    <View>
      {datas.map((data) => {
        return (
          <Layout>
            <NoticeBox key={data?.noticeId}>
              <View>
              <FdRow>
                <Title>{data?.noticeTitle}</Title>
                <TextGray>{data?.noticeDate}</TextGray>
              </FdRow>
              <TextGray>{data?.noticeContent}</TextGray>
              </View>
            </NoticeBox>
          </Layout>
        );
      })}
    </View>
  );
};

export default PrNoticeList;

const NoticeBox = styled.View`
  flex: 1;
  width: 320px;
  height: 54px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
  border-radius: 10px;
  border-top: 1px solid ${Theme.colors.LightGray};
`;
const FdRow = styled.View`
  flex-direction: row;
  margin: 0 0 0 10px; 
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
  width: 160px;
  font-size: 13px;
  overflow: hidden;  		
  text-overflow: ellipsis;  	
  white-space: nowrap; 		
  word-break:break-all;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
`;