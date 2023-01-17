import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

function ScrollViewLayout(props) {
  return <ScrollView style={styles.LayoutView}>{props.children}</ScrollView>;
}

export default ScrollViewLayout;

const styles = StyleSheet.create({
  LayoutView: {
    // paddingRight: 20,
    // paddingLeft: 20,
    marginLeft: 10,
    marginRight: 10,
  },
});
