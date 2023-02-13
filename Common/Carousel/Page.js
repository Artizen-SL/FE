import React from "react";
import { Dimensions, Image } from "react-native";
import styled from "styled-components/native";

export default function Page({ item, style }) {
  return (
    <PageItem color={item.color} style={[style]}>
      {/* <PageNum>{item.num}</PageNum> */}
      <Image
        source={{
          // uri: item?.posterUrl,
          uri: item?.posterUrl,
        }}
        style={{
          resizeMode: "contain",
          height: Dimensions.get("window").height / 2,
          width: "100%",
        }}
      ></Image>
    </PageItem>
  );
}

const PageItem = styled.View`
  background-color: ${(props) => props.color};
  justify-content: center;
  align-items: center;
  border-radius: 20px;
`;

const PageNum = styled.Text``;
