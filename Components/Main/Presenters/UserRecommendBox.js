import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import Theme from "../../../Theme/Theme";
import styled, { css } from "styled-components/native";

const UserRecommendBox = ({ datas }) => {
  const navigation = useNavigation();
  return (
    <View style={{ marginTop: 10 }}>
      {datas?.map((data) => {
        let categoryName = "";
        data.category === "show"
          ? (categoryName = "공연")
          : data.category === "exhibition"
          ? (categoryName = "전시회")
          : data.category === "concert"
          ? (categoryName = "콘서트")
          : data.category === "expo"
          ? (categoryName = "박람회")
          : (categoryName = "");
        return (
          <View>
            <View
              key={data.id}
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: 20,
              }}
            >
              <Logo source={require("../../../assets/Icon/recommend.png")} />
              <Text style={styles.smailTitle}>
                <Text style={{ fontWeight: "bold" }}>아티즌</Text>' 님 이런{" "}
                <Text style={{ fontWeight: "bold" }}>{categoryName}</Text>는
                어떠세요?
              </Text>
            </View>
            <ImageBackground
              source={{ uri: data?.posterUrl }}
              style={styles.recommendImage}
            >
              <Image
                source={require("../../../assets/Icon/ribbon.png")}
                style={{ marginLeft: 16 }}
              />
              <View style={{ marginLeft: 18, marginTop: 25 }}>
                <WhiteText>{data?.name}</WhiteText>
                <WhiteText>
                  {data?.startDate} ~ {data?.finishDate}
                </WhiteText>
                <WhiteText>{data?.place}</WhiteText>
              </View>
            </ImageBackground>
          </View>
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
  center: {
    alignItems: "center",
    justifyContent: "center",
  },
  recommendImage: {
    width: 312,
    height: 156,
    borderRadius: 5,
    marginTop: 6,
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
  smailTitle: {
    marginLeft: 6,
    marginBottom: 6,
    borderBottomColor: Theme.colors.Black,
    borderBottomWidth: StyleSheet.hairlineWidth,
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

const WhiteText = styled.Text`
  color: ${Theme.colors.White};
  font-size: 14;
  font-weight: 700;
`;

const Logo = styled(Image)`
  width: 30px;
  height: 30px;
`;
