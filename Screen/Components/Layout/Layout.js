import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

function Layout(props) {
  return <View style={styles.LayoutView}>{props.children}</View>;
}

export default Layout;

const styles = StyleSheet.create({
  LayoutView: {
    // backgroundColor: "pink",
    marginLeft: 20,
    marginRight: 20,
  },
});
