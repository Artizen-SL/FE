import React from "react";

import {
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import styled from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

const CommunityContentsWrapper = (props) => {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1 }}>
      <CommuBgImage
        resizeMode="cover"
        source={require("../../../assets/background/community-bg.png")}
      >
        <CommunityContainer>
          <StTitleWrapper>
            <StTitleText>{props.title}</StTitleText>
          </StTitleWrapper>
          {props.children}
        </CommunityContainer>
        {props.title !== "Posting" ? (
          <StPostingBtn
            onPress={() =>
              navigation.navigate("CommunityRoutes", {
                screen: "CommunityPost",
              })
            }
          >
            <Image source={require("../../../assets/Icon/posting.png")} />
            <Image />
          </StPostingBtn>
        ) : (
          <></>
        )}
      </CommuBgImage>
    </View>
  );
};

export default CommunityContentsWrapper;

const CommuBgImage = styled(ImageBackground)`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const CommunityContainer = styled(View)`
  height: 95%;
  width: 95%;
  background-color: white;
  border-radius: 20px;
  box-shadow: 0px 4px 4px black;
  overflow: hidden;
  padding-bottom: 5px;
`;
const StTitleWrapper = styled(View)`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  padding-left: 15px;
  padding-top: 10px;
  padding-bottom: 10px;
  border-color: #ddd;
  border-bottom-width: 1px;
`;
const StTitleText = styled(Text)`
  font-size: 25px;
  font-weight: 500;
`;

const StPostingBtn = styled(TouchableOpacity)`
  z-index: 10;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 20px;
  bottom: 20px;
  background-color: #48b7e2;
  width: 50px;
  height: 50px;
  border-radius: 25px;
`;
