import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StatusBar } from "expo-status-bar";

import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import ScrollViewLayout from "../Components/Layout/ScrollViewLayout";
import styled from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";

const CommunityMain = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <ImageBackground
          resizeMode="cover"
          source={require("../../assets/background/community-bg.png")}
          style={styles.image}
        >
          <CommunityContainer>
            <StTitleWrapper>
              <StTitleText>Community</StTitleText>
            </StTitleWrapper>
            <ScrollViewLayout></ScrollViewLayout>
          </CommunityContainer>
          {/* <TouchableOpacity
          onPress={() =>
            navigation.navigate("CommunityRoutes", {
              screen: "CommnunityDetail",
            })
          }
        >
          <Text>CommunityMain</Text>
        </TouchableOpacity> */}
        </ImageBackground>
      </View>
    </SafeAreaView>
  );
};

export default CommunityMain;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontSize: 42,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000c0",
  },
});

const CommunityContainer = styled(View)`
  height: 95%;
  width: 95%;
  background-color: pink;
  border-radius: 20px;
  box-shadow: 0px 4px 4px black;
`;
const StTitleWrapper = styled(View)`
  width: 100%;
  padding-left: 15px;
  padding-top: 10px;
  /* border-bottom: Theme.colors.; */
`;
const StTitleText = styled(Text)`
  font-size: 25px;
  font-weight: bold;
`;
