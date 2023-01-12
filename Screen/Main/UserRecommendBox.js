import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, StyleSheet, Text, View, TouchableOpacity, ImageBackground } from "react-native";
import Theme from "../../Theme/Theme";
import ScrollViewLayout from "../Components/Layout/ScrollViewLayout";
import styled, { css } from "styled-components/native";

const UserRecommendBox = ({ datas }) => {
  // const {category, id, name, posterUrl, startDate, finishDate, place} = data;
  const navigation = useNavigation();
  return (
    <View>
      {datas?.map((data) => {
        let categoryName = "";
        data.category === "show"
          ? (categoryName = "공연")
          : data.category === "exhibition"
          ? (categoryName = "전시회")
          : data.category ==="concert" 
          ? (categoryName = "콘서트")
          : data.category === "expo"
          ? (categoryName= "박람회")
          : (categoryName = "");
        return (
          <ScrollViewLayout>
            <View style={{ flexDirection: "row", alignItems:"center",marginBottom:6}}>
              <Image source={require("../../assets/Icon/recommend.png")} />
              <Text style={{ marginLeft:5 }}>'아티즌'님 이런 {categoryName}는 어떠세요?</Text>
            </View>
            <Image
              source={{ uri: data?.posterUrl }}
              style={styles.recommendImage}
            />
          </ScrollViewLayout>
        );
      })}
    </View>
  );
};

export default UserRecommendBox;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  smallRound: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  center: {
    alignItems: "center",
    justifyContent: "center",
  },
  recommendImage: {
    width: 312,
    height: 156,
    borderRadius: 5,
  },
  bgImage: { width: "100%", height: "100%" },
  logo: { width: 117, height: 32 },
  longBox: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    width: 312,
    height: 34,
    backgroundColor: "#fff",
    borderRadius: 5,
    marginTop: 22,
  },
  smallText: {
    fontSize: 12,
    marginLeft: 5,
  },
  skyblueText: {
    color: Theme.colors.SkyBlue,
    fontSize: 12,
    borderBottomColor: Theme.colors.SkyBlue,
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginLeft: 5,
  },
});

const StView = styled.View`
  /* background-color: pink; */
`;

const SmallRound = styled.View`
  width: 50px;
  height: 50px;
  border: 1px solid ${Theme.colors.LightGray};
`;

const LogoView = styled.View`
  flex: 6;
  align-items: center;
  justify-content: center;
`;

const LongBox = styled.View`
  flex: row;
  width: 312px;
  height: 34px;
  background-color: white;
  border-radius: 5px;
`;
