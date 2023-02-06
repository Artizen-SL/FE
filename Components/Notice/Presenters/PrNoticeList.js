import ScrollViewLayout from "../../Layout/ScrollViewLayout";
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
import Theme from "../../../Theme/Theme";
import styled, { css } from "styled-components/native";

const PrNoticeList = ({ datas }) => {
  return (
    <ScrollViewLayout>
      <ImageBackground
        source={require("../../../assets/background/notice.png")}
      >
        <View>
        <Image
                source={require("../../../assets/Icon/notice.png")}
              /> 
        </View>
      </ImageBackground>
    </ScrollViewLayout>
  );
};

export default PrNoticeList;
