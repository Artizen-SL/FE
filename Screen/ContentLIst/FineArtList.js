import React, { useEffect } from "react";
import { View, Text, Button } from "react-native";
import styled from "styled-components/native";

const FineArtList = ({ navigation }) => {
  return (
    <View>
      <Small>미술관</Small>
      <Button
        title="메인화면 바로가기"
        onPress={() => navigation.navigate("Main")}
      />
    </View>
  );
};

export default FineArtList;

export const Small = styled.Text`
  font-size: 12px;
`;
