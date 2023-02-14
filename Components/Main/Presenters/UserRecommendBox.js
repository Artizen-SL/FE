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
import { useNavigation } from "@react-navigation/native";

const UserRecommendBox = ({ datas, user}) => {
  const navigation = useNavigation();
  return (
    <View style={{ marginTop: 10 }}>
      {datas?.map((data) => {
        // let categoryName = "";
        // data.category === "show"
        //   ? (categoryName = "공연")
        //   : data.category === "exhibition"
        //   ? (categoryName = "전시회")
        //   : data.category === "concert"
        //   ? (categoryName = "콘서트")
        //   : data.category === "expo"
        //   ? (categoryName = "박람회")
        //   : (categoryName = "");
        return (
          <View key={data?.contentId}>
            <Center>
              <Logo source={require("../../../assets/Icon/recommend.png")} />
              <Text style={styles.smailTitle}>
                <Text style={{ fontWeight: "bold" }}>{user}</Text> 님 이런{" "}
                <Text style={{ fontWeight: "bold" }}>{data?.category}</Text>는
                어떠세요?
              </Text>
            </Center>
            <TouchableOpacity
            onPress={() =>
              navigation.navigate("ContentDetail", {
                screen: "ContentDetail",
                id: data?.contentId,
              })
            }
            >
            <RecommendImage source={{ uri: data?.posterUrl }}>
              <Image
                source={require("../../../assets/Icon/ribbon.png")}
                style={{ marginLeft: 16 }}
              />
              <View style={{ marginLeft: 18, marginTop: 25 }}>
                <WhiteText>{data?.title}</WhiteText>
                <WhiteText>{data?.date}</WhiteText>
                <WhiteText>{data?.place}</WhiteText>
              </View>
            </RecommendImage>
            </TouchableOpacity>
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
    width: "80%",
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

const Center = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 30px;
  margin-left: 5px;
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
  font-size: 14px;
  font-weight: 700;
`;

const Logo = styled(Image)`
  width: 30px;
  height: 30px;
`;
const RecommendImage = styled(ImageBackground)`
  width: 100%;
  height: 180px;
  border-radius: 50px;
  margin-top: 6px;
`;
