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

const InfoSearchRes = ({datas}) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
    <ScrollViewLayout>
      <LowLeft>
        <Image source={require("../../../assets/Icon/Search-bg-ver.png")} />
        <SearchWord>검색어</SearchWord>
        <BlackBoldText>검색결과 입니다.</BlackBoldText>
      </LowLeft>
    </ScrollViewLayout>
  </SafeAreaView>
  )
}

export default InfoSearchRes

const SearchWord = styled(Text)`
  color: ${Theme.colors.Pink};
  font-weight: bold;
  font-size: 15px;
`;

const BlackBoldText = styled(Text)`
  color: ${Theme.colors.Black};
  font-weight: bold;
  font-size: 15px;
`;

const GrayText = styled(Text)`
  color: ${Theme.colors.DarkGray};
  font-size: 13px;
`;

const LinkText = styled(Text)`
  color: ${Theme.colors.SkyBlue};
  font-size: 13px;
  text-decoration: underline;
`;

const LowLeft = styled(View)`
  flex-direction: row;
  justify-content: flex-start;
  width: 100%;
`;