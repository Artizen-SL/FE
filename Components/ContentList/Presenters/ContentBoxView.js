import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  Alert,
} from "react-native";
import usePostHeart from "../../../querys/category/usePostHeart";
import Theme from "../../../Theme/Theme";

function ContentBox({
  data: { genre, id, name, posterUrl, date, facility },
  category,
}) {
  const navigation = useNavigation();
  const [isHeart, setIsHeart] = useState(false);
  const { mutate: postHeartMutate } = usePostHeart();

  const onHeartPressHandler = () => {
    Alert.alert("확인", "컨텐츠를 좋아요 하시겠습니까? ", [
      {
        text: "나가기",
        style: "cancel",
      },
      {
        text: "네",
        onPress: () => {
          postHeartMutate(id, {
            onSuccess: (data) => {
              if (data.code === "PUSH_LIKE") return setIsHeart(true);
            },
            onError: (error) => {},
          });
        },
      },
    ]);
  };

  return (
    <TouchableOpacity
      style={styles.StContentWrapper}
      activeOpacity={0.9}
      onPress={() =>
        navigation.navigate("ContentDetail", {
          screen: "ContentDetail",
          id: id,
          category: category,
        })
      }
    >
      <View>
        <View style={styles.StImgWrapper}>
          {posterUrl ? (
            <Image source={{ uri: posterUrl }} style={styles.StImg} />
          ) : (
            <Image
              source={require("../../../assets/login/logo_v1_3.png")}
              style={styles.StEmptyImg}
              resizeMode="contain"
            />
          )}
        </View>
        <View style={styles.StTextWrapper}>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text
              style={styles.StNameText}
              numberOfLines={1}
              ellipsizeMode="tail"
            >
              {name}
            </Text>

            <TouchableOpacity onPress={onHeartPressHandler}>
              {isHeart ? (
                <Image
                  style={styles.StHeartIcon}
                  source={require("../../../assets/Icon/heart.png")}
                />
              ) : (
                <Image
                  style={styles.StHeartIcon}
                  source={require("../../../assets/Icon/grayHeart.png")}
                />
              )}
            </TouchableOpacity>
          </View>
          <Text style={styles.StText}>기간 : {date}</Text>
          <Text style={styles.StText}>장소 : {facility}</Text>
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
  StEmptyImg: {
    borderRadius: 20,
    width: "100%",
    height: "100%",
    backgroundColor: "gray",
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
    width: "80%",
  },
  StText: {
    fontSize: 13,
    color: Theme.colors.Gray,
  },

  StHeartIcon: {
    width: 25,
    height: 25,
  },
});
