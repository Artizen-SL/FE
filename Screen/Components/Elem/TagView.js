import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Theme from "../../../Theme/Theme";

const TagView = (props) => {
  return (
    <View style={TagStyles.StTagWrapper}>
      <Text style={TagStyles.StTagText}>{props.children}</Text>
    </View>
  );
};

export default TagView;

const TagStyles = StyleSheet.create({
  StTagWrapper: {
    width: 60,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Theme.colors.SkyBlue,
    borderRadius: 20,
  },
  StTagText: {
    color: Theme.colors.White,
  },
});
