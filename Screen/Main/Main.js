import * as React from 'react';
import { StyleSheet,View, Text, Button, Image } from "react-native";
import styled, {css} from 'styled-components/native';
import Theme from '../../Theme/Theme';

const Main = ({ navigation }) => {
  
  return (
    <StView style={styles.container}>
    <Text>메인화면</Text>
    <GalleryView
      onPress={() => navigation.navigate("FineArtList")}
    ></GalleryView>
  </StView>
  )
}

export default Main


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

const StView = styled.View`
  background-color: pink;
`;

const GalleryView = styled.View`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 1px solid ${Theme.colors.LightGray};
`;


