import React from "react";

import { ImageBackground, Text, View } from "react-native";
import styled from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";

const CommunityContentsWrapper = (props) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
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
      </CommuBgImage>
    </SafeAreaView>
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
