import React from "react";
import {
  StyleSheet,
  View,
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
} from "react-native";
import styled, { css } from "styled-components/native";
import Theme from "../../../Theme/Theme";
import { useNavigation } from "@react-navigation/native";

const BestPost = ({ datas }) => {
  const navigation = useNavigation();
  return (
    <RowBox>
      {datas.map((data) => {
        return (
          <Center
            key={data?.contentId}
            onPress={() =>
              navigation.navigate("ContentDetail", {
                screen: "ContentDetail",
                id: data?.contentId,
              })
            }
          >
            <MiddleSqureImage source={{ uri: data?.posterUrl }}>
              <WhiteText>{data?.title}</WhiteText>
            </MiddleSqureImage>
          </Center>
        );
      })}
    </RowBox>
  );
};

export default BestPost;

const styles = StyleSheet.create({
  center: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    margin: 3,
  },
  row: {
    width: 320,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "flex-start",
    margin: 10,
  },
});

const Round = styled.View`
  width: 100px;
  height: 150px;
`;

const WhiteText = styled.Text`
  color: ${Theme.colors.White};
  font-size: 14px;
  font-weight: 700;
`;
const MiddleSqureImage = styled.ImageBackground`
  width: 153px;
  height: 153px;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  background-color: "rgba(0, 0, 0, 0.5)";
`;

const RowBox = styled(View)`
  width: 320px;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-start;
  margin: 10px;
`;

const Center = styled(TouchableOpacity)`
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  margin: 3px;
`;
