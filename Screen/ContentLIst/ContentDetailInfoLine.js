import React from "react";
import { StyleSheet, Text, View } from "react-native";
import TagView from "../Components/Elem/TagView";

const ContentDetailInfoLine = ({ tagView, infoText }) => {
  return (
    <View style={InfoLineStyles.contentInfoText}>
      <TagView>{tagView}</TagView>
      <Text style={InfoLineStyles.infoLineText}>{infoText}</Text>
    </View>
  );
};

export default ContentDetailInfoLine;

const InfoLineStyles = StyleSheet.create({
  contentInfoText: {
    flexDirection: "row",
    // alignItems: "center",
    paddingTop: 10,
    paddingBottom: 10,
  },
  infoLineText: {
    marginLeft: 10,
    textAlignVertical: "center",
    fontSize: 15,
  },
});
