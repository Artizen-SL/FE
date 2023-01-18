import React from "react";
import { Dimensions, Image, ImageBackground, View } from "react-native";
import styled from "styled-components/native";

export default function MainPage({ item, style }) {
  return (
    <PageItem style={[style]}>
      {/* <PageNum>{item.num}</PageNum> */}
      <MainImage 
        source={item?.mainImageUrl}
        style={{
          resizeMode: "contain",
          height: Dimensions.get("window").height / 2,
          width: "100%",
        }}
      />
    </PageItem>
  );
}

const PageItem = styled.View`
  background-color: ${(props) => props.color};
  justify-content: center;
  align-items: center;
  border-radius: 5px;
`;
const MainImage = styled.Image`
  border-radius: 5px;
`;

const PageNum = styled.Text``;
