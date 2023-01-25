import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

function ScrollViewLayout(props) {
  return (
    <SafeAreaView>
      <ScrollView style={styles.LayoutView}>{props.children}</ScrollView>
    </SafeAreaView>
  );
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
