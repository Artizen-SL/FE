import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import Theme from "../../Theme/Theme";

function ContentBox({
  data: { category, id, name, posterUrl, startDate, finishDate, place },
}) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.StContentWrapper}
      activeOpacity={0.9}
      onPress={() =>
        navigation.navigate("ContentDetail", {
          screen: "ContentDetail",
          params: { id: id, category: category },
        })
      }
    >
      <View>
        <View style={styles.StImgWrapper}>
          <Image source={{ uri: posterUrl }} style={styles.StImg} />
        </View>
        <View style={styles.StTextWrapper}>
          <Text style={styles.StNameText}>{name}</Text>
          <Text style={styles.StText}>
            기간 : {startDate}~{finishDate}
          </Text>
          <Text style={styles.StText}>위치 : {place}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

export default ContentBox;

const styles = StyleSheet.create({
  StContentWrapper: {
    borderRadius: 20,
    backgroundColor: "#fff",
    height: Dimensions.get("window").height / 2,
    marginBottom: 20,
    padding: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  StImgWrapper: {
    borderRadius: 20,
    height: "70%",
    width: "100%",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.85,
    shadowRadius: 3.84,
    elevation: 5,
  },
  StImg: {
    borderRadius: 20,
    width: "100%",
    height: "100%",
  },
  StTextWrapper: {
    width: "100%",
    height: "30%",
    justifyContent: "space-around",
    paddingBottom: 10,
    paddingTop: 10,
    // borderWidth: 1,
    // borderStyle: "solid",
  },

  StNameText: {
    fontSize: 15,
    fontWeight: "bold",
  },
  StText: {
    fontSize: 10,
    color: Theme.colors.Gray,
  },
});