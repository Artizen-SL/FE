import React from "react";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import Theme from "../../../Theme/Theme";

const toolTipArray = [
  { imageSource: require("../../../assets/Icon/gallery.png"), name: "전시회" },
  { imageSource: require("../../../assets/Icon/gallery.png"), name: "공연" },
  { imageSource: require("../../../assets/Icon/gallery.png"), name: "콘서트" },
  { imageSource: require("../../../assets/Icon/gallery.png"), name: "박람회" },
];

const ToolTip = () => {
  return (
    <View style={toolTipBoxStyles.toolTipBox}>
      {toolTipArray.map((data, idx) => {
        return (
          <View style={toolTipBoxStyles?.toolTipView} key={idx}>
            <Image source={data.imageSource} />
            <Text>{data.name}</Text>
          </View>
        );
      })}
    </View>
  );
};

export default ToolTip;

const toolTipBoxStyles = StyleSheet.create({
  toolTipBox: {
    width: Dimensions.get("window").width / 5,
    minWidth: 200,
    height: Dimensions.get("window").height / 5,
    minHeight: 250,
    flex: 1,
    alignContent: "center",
    justifyContent: "center",
    // borderColor: "black",
    // borderWidth: 1,
    paddingLeft: 5,
    opacity: 0.8,
    position: "absolute",
    backgroundColor: "white",
    right: 0,
    bottom: 0,
  },
  toolTipView: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  toolTipDivider: {
    borderBottomColor: Theme.colors.Gray,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});
