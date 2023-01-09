import * as React from "react";
import {
  StyleSheet,
  View,
  Text,
  Button,
  Image,
  TouchableOpacity,
} from "react-native";
import styled, { css } from "styled-components/native";
import Theme from "../../Theme/Theme";
import gallery from "../../assets/Icon/gallery.svg";

const Main = ({ navigation }) => {
  return (
    <StView style={styles.container}>
      <Text>메인화면</Text>
      <TouchableOpacity
        style={styles.center}
        onPress={() => navigation.navigate("FineArtList")}
      >
        <Image source={require("../../assets/Icon/gallery.png")} />
        <Text>미술관</Text>
      </TouchableOpacity>
    </StView>
  );
};

export default Main;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  smallRound: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  center: {
    alignItems: "center",
    justifyContent: "center",
  },
});

const StView = styled.View`
  background-color: pink;
`;

const SmallRound = styled.View`
  width: 50px;
  height: 50px;
  border: 1px solid ${Theme.colors.LightGray};
`;
