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
import ScrollViewLayout from "../../../Components/Layout/ScrollViewLayout";
import Layout from "../../../Components/Layout/Layout";
import styled, { css } from "styled-components/native";
import Theme from "../../../Theme/Theme";

const PrMainNotice = ({ datas,navigation  }) => {
  return (
    <View>
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
            <NoticeBox key={data?.id}>
              <RowBox>
                <Logo source={require("../../../assets/Icon/skyStar.png")} />
                <Text>{data?.title}</Text>
                <Text>{data?.createdAt}</Text>
              </RowBox>
            </NoticeBox>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default PrMainNotice;

const RowBoxWrap = styled(View)`
width: 100%;
flex-direction: row;
  justify-content: center;

`;

const NoticeBox = styled(View)`
  width: 100%;
  height: 34px;
  border-radius: 5px;
  background-color: ${Theme.colors.White};
  align-items: center;
  margin-bottom: 2px;
  justify-content: center;
  margin-top: 2px;
`;

const Logo = styled(Image)`
  width: 47px;
  height: 21px;
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
  justify-content: space-between;
`;

const HiddenText = styled(Text)`
  color: transparent;
`;
