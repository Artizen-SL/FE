import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import styled from "styled-components/native";
import useFetchMyPage from "../../querys/mypage/useFetchMyPage";

const ScreenHeader = () => {
  const navigation = useNavigation();
  const { data: myPageData } = useFetchMyPage();
  return (
    <>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          backgroundColor: "#48b7e2",
          width: "100%",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            backgroundColor: "#48b7e2",
            alignItems: "center",
          }}
        >
          <Image
            style={{ width: 35, height: 35, marginRight: 10 }}
            resizeMode="contain"
            source={require("../../assets/logo/artizenRabbit.png")}
          />
          <Image
            style={{ width: 100, height: 35 }}
            resizeMode="contain"
            source={require("../../assets/logo/artizenNew.png")}
          />
        </View>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("MainRoutes", { screen: "Search" })
          }
        >
          <Image
            style={{ width: 35, height: 35, marginRight: 10 }}
            resizeMode="contain"
            source={require("../../assets/Icon/Search.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("MyPageRoutes")}>
          <Image
            style={{ width: 40, height: 40, borderRadius: 20 }}
            resizeMode="contain"
            source={{ uri: myPageData.profileImg }}
          />
        </TouchableOpacity>
      </View>
    </>
  );
};

export default ScreenHeader;
