import React from "react";
import { StyleSheet, Text, View } from "react-native";
import TagView from "../Components/Elem/TagView";

const ContentDetailInfoLine = ({ tagView, infoText }) => {
  return (
    <View style={InfoLineStyles.contentInfoText}>
      <TagView variant={"detailContent"}>{tagView}</TagView>
      <Text>{infoText}</Text>
    </View>
  );
};

export default ContentDetailInfoLine;

const InfoLineStyles = StyleSheet.create({
  contentInfoText: {
    flexDirection: "row",
    alignItems: "center",
  },
});
