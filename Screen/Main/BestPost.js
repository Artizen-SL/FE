import React from "react";
import { StyleSheet, View, Image, ImageBackground, Text } from "react-native";
import styled, { css } from "styled-components/native";
import Theme from "../../Theme/Theme";

const BestPost = ({ datas }) => {
  console.log(datas[0].posterUrl);
  return (
    <View style={styles.row}>
      {datas.map((data) => {
        return (
          <View style={styles.center} key={data?.id}>
            <MiddleSqureImage
              source={{ uri: data?.posterUrl }}          
            >
              <WhiteText>{data?.name}</WhiteText>
            </MiddleSqureImage>
          </View>
        );
      })}
    </View>
  );
};

export default BestPost;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  container2: {
    width: "100%",
    height: 200,
  },
  round: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  center: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    margin: 3,
  },
  smallText: {
    fontSize: 12,
    marginLeft: 5,
  },
  row: {
    width: 320,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "flex-start",
    margin: 10,
  },
  middleSqure: {
    width: 153,
    height: 153,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
});

const Round = styled.View`
  width: 100px;
  height: 150px;
`;

const WhiteText = styled.Text`
  color: ${Theme.colors.White};
  font-size: 14;
  font-weight: 700;
`
const MiddleSqureImage = styled.ImageBackground`
  width: 153;
  height: 153;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  background-color: "rgba(0, 0, 0, 0.5)";
`;
