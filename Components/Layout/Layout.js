import React from "react";
import styled from "styled-components/native";
import { ScrollView, StyleSheet, Text, View } from "react-native";

function Layout(props) {
  return <StView {...props}>{props.children}</StView>;
}

export default Layout;

const styles = StyleSheet.create({
  LayoutView: {
    // backgroundColor: "pink",
    marginLeft: 20,
    marginRight: 20,
  },
});

const StView = styled(View)`
  margin: ${({ marginSide, marginUpdown }) => (marginSide && marginUpdown?`${marginUpdown} ${marginSide}`:"3% 11% 0 12%")};
`;
