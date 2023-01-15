import React from "react";
import { Dimensions, Image, ImageBackground, View } from "react-native";
import styled from "styled-components/native";

export default function MainPage({ item, style }) {
  console.log("item===>", item?.mainImageUrl);
  return (
    <PageItem style={[style]}>
      {/* <PageNum>{item.num}</PageNum> */}
      <Image
        source={item.mainImageUrl}
        style={{
          resizeMode: "contain",
          height: Dimensions.get("window").height / 2,
          width: "100%",
        }}
      />
    </PageItem>

    // <PageItem style={[style]}>
    //   {/* <PageNum>{item.num}</PageNum> */}
    //   <Image
    //     source={{uri : 'item.mainImageUrl'}}
    //     style={{
    //       resizeMode: "contain",
    //       height: Dimensions.get("window").height / 2,
    //       width: "100%",
    //     }}
    //   ></Image>
    // </PageItem>
  );
}

const PageItem = styled.View`
  background-color: ${(props) => props.color};
  justify-content: center;
  align-items: center;
  border-radius: 20px;
`;

const PageNum = styled.Text``;
