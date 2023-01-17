import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Theme from "../../../Theme/Theme";

const TagView = ({ children }) => {
  return (
    <View style={TagStyles.StTagWrapper}>
      <Text style={TagStyles.StTagText}>{children}</Text>
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
    borderRadius: 13,
    // marginRight: tagViewMarginRight,
  },
  StTagText: {
    color: Theme.colors.White,
    fontSize: 15,
  },
});
