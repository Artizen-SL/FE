import React from "react";
import { StyleSheet, Text, View } from "react-native";
import TagView from "../../Components/Elem/TagView";

const ContentDetailInfoLine = ({ tagView, infoText }) => {
  return (
    <View style={InfoLineStyles.contentInfoText}>
      <TagView variant="category">{tagView}</TagView>
      <View style={InfoLineStyles.textLine}>
        <Text style={InfoLineStyles.infoLineText}>{infoText}</Text>
      </View>
    </View>
  );
};

export default ContentDetailInfoLine;

const InfoLineStyles = StyleSheet.create({
  contentInfoText: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 10,
    paddingBottom: 10,
  },
  textLine: {
    flexDirection: "row",
    paddingTop: 10,
    paddingBottom: 10,
    width: "75%",
  },

  infoLineText: {
    marginLeft: 10,
    textAlignVertical: "center",
    fontSize: 15,
  },
});
