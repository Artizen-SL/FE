import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

function ScrollViewLayout(props) {
  return <View style={styles.LayoutView}>{props.children}</View>;
}

export default ScrollViewLayout;

const styles = StyleSheet.create({
  LayoutView: {
    // backgroundColor: "pink",
    margin: 10,
  },
});
