import {
  StyleSheet,
  View,
  Text,
  Button,
  Image,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
} from "react-native";
import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components/native";
import Theme from "../../Theme/Theme";
import ScrollViewLayout from "../Components/Layout/ScrollViewLayout";
import MainCarousel from "./MainCarousel";
import UserRecommendData from "./UserRecommendData";
import useGpsRes from "../../utils/useGpsRes";
import RecentlyData from "./RecentlyData";
import BestData from "./BestData";

const Main = ({ navigation }) => {
  const screenWidth = Math.round(Dimensions.get("window").width);
  const pages = [
    {
      num: 1,
      mainImageUrl: require("../../assets/main/caroucel/maincarousel1.png"),
    },
    {
      num: 2,
      mainImageUrl: require("../../assets/main/caroucel/maincarousel2.png"),
    },
    {
      num: 3,
      mainImageUrl: require("../../assets/main/caroucel/maincarousel3.png"),
    },
    {
      num: 4,
      mainImageUrl: require("../../assets/main/caroucel/maincarousel4.png"),
    },
    {
      num: 5,
      mainImageUrl: require("../../assets/main/caroucel/maincarousel5.png"),
    },
  ];

  const [gpsRes, setGpsRes] = useState({ region: "Loading...", district: "" });

  const resetGpsAsk = async () => {
    const { region, district, disagree } = await useGpsRes();
    setGpsRes({ ...gpsRes, region: region, district: district });
  };

  useEffect(() => {
    const locaiton = resetGpsAsk();
    console.log(locaiton);

    if (typeof locaiton === "object") {
      setGpsRes({ ...gpsRes, region: "", district: "" });
      resetGpsAsk();
    }
  }, []);

  return (
    <ScrollViewLayout>
      <ImageBackground
        source={require("../../assets/background/main.png")}
        style={styles.bgImage}
      >
        <View style={[styles.container, styles.header]}>
          <View style={styles.headerarea}>
            <Image
              source={require("../../assets/login/logo_v1_3.png")}
              style={styles.logo}
            />
            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
              <Text>로그인</Text>
            </TouchableOpacity>
          </View>
          <ImageBackground
            source={require("../../assets/background/white.png")}
            style={styles.whiteBackground}
          >
            <View
              style={{
                marginTop: 40,
                // borderWidth: 1,
                // borderStyle: "solid",
              }}
            >
              <MainCarousel
                gap={20}
                offset={0}
                pages={pages}
                pageWidth={screenWidth - (20 + 20 * 2)}
              />
            </View>
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                justifyContent: "space-evenly",
                margin: 5,
              }}
            >
              <TouchableOpacity
                style={styles.center}
                onPress={() =>
                  navigation.navigate("MainRoutes", {
                    screen: "CategoryDetail",
                    params: { category: "FineArtList" },
                  })
                }
              >
                <Image source={require("../../assets/Icon/gallery.png")} />
                <Text>미술관</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.center}
                onPress={() =>
                  navigation.navigate("MainRoutes", {
                    screen: "CategoryDetail",
                    params: { category: "ShowList" },
                  })
                }
              >
                <Image source={require("../../assets/Icon/show.png")} />
                <Text>공연</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.center}
                onPress={() =>
                  navigation.navigate("MainRoutes", {
                    screen: "CategoryDetail",
                    params: { category: "ConcertList" },
                  })
                }
              >
                <Image source={require("../../assets/Icon/concert.png")} />
                <Text>콘서트</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.center}
                onPress={() =>
                  navigation.navigate("MainRoutes", {
                    screen: "CategoryDetail",
                    params: { category: "ExpoList" },
                  })
                }
              >
                <Image source={require("../../assets/Icon/expo.png")} />
                <Text>박람회</Text>
              </TouchableOpacity>
            </View>
          </ImageBackground>
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              marginTop: 15,
            }}
          >
            <View style={styles.longBox}>
              <Image
                source={require("../../assets/Icon/gps.png")}
                style={{
                  margin: 1,
                }}
              />
              <Text style={[styles.smallText]}>
                현재 위치는
                <UserGps>
                  {gpsRes?.district?.length > 0 && gpsRes?.district ? (
                    <>
                      {gpsRes?.region} {gpsRes?.district}
                    </>
                  ) : gpsRes?.region === "Loading..." ? (
                    <Text>Loading...</Text>
                  ) : (
                    <Text>위치없음</Text>
                  )}
                </UserGps>
                입니다.
              </Text>
              <Text style={styles.skyblueText} onPress={resetGpsAsk}>
                (위치 재설정)
              </Text>
            </View>
          </View>
          <View style={styles.center}>
            <UserRecommendData />
          </View>

          <View style={{ marginTop: 20 }}>
            <Text style={styles.BlBoldText}>
              <Image
                source={require("../../assets/Icon/best.png")}
                style={{ marginRight: 5 }}
              />
              Best Artizen
            </Text>
            <BestData />
          </View>
          <View style={{ marginTop: 20 }}>
            <Text style={styles.BlBoldText}>
              <Image
                source={require("../../assets/Icon/new.png")}
                style={{ marginRight: 5 }}
              />
              NEW Artizen
            </Text>
            <RecentlyData />
          </View>
        </View>
      </ImageBackground>
    </ScrollViewLayout>
  );
};

export default Main;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  smallRound: {
    width: 50,
    height: 50,
  },
  center: {
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    flex: 1,
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
  BlBoldText: {
    color: Theme.colors.Black,
    fontSize: 14,
    fontWeight: "bold",
    width: 114,
    borderBottomColor: Theme.colors.Black,
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginLeft: 10,
  },
  whiteBackground: {
    width: "100%",
    height: 363,
  },
  headerarea: {
    flex: 1,
    height: 60,
    width: 340,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    margin: 7,
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
const UserGps = styled.Text`
  color: ${Theme.colors.SkyBlue};
  font-weight: 700;
`;
