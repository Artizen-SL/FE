import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

function ScrollViewLayout(props) {
  return <ScrollView style={styles.LayoutView}>{props.children}</ScrollView>;
}

export default ScrollViewLayout;

const styles = StyleSheet.create({
  LayoutView: {
    padding: 20,
  },
});
