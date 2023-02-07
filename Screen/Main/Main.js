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
import ScrollViewLayout from "../../Components/Layout/ScrollViewLayout";
import MainCarousel from "../../Components/Main/MainCarousel";
import UserRecommendData from "../../Components/Main/Data/UserRecommendData";
import useGpsRes from "../../utils/useGpsRes";
import RecentlyData from "../../Components/Main/Data/RecentlyData";
import BestData from "../../Components/Main/Data/BestData";
import MainCarouselData from "../../Components/Main/Data/MainCarouselData";
// import MainView from "../../Components/Main/Presenters/MainView";

const Main = ({ navigation }) => {
  const screenWidth = Math.round(Dimensions.get("window").width);

  const pages = MainCarouselData();

  const [gpsRes, setGpsRes] = useState({ region: "Loading...", district: "" });

  const resetGpsAsk = async () => {
    const { region, district, disagree } = await useGpsRes();
    setGpsRes({ ...gpsRes, region: region, district: district });
  };

  useEffect(() => {
    const location = resetGpsAsk();
    console.log(location);

    if (typeof location === "object") {
      setGpsRes({ ...gpsRes, region: "", district: "" });
      resetGpsAsk();
    }
  }, []);

  return (
    <ScrollViewLayout>
      {/* <MainView /> */}
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
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("MainRoutes", {
                  screen: "Search",
                })
              }
            >
              <Image source={require("../../assets/Icon/Search.png")} />
            </TouchableOpacity>
          </View>
          <ImageBackground
            source={require("../../assets/background/white.png")}
            style={styles.whiteBackground}
          >
            <View
              style={{
                marginTop: 40,
              }}
            >
              <MainCarousel
                gap={20}
                offset={0}
                pages={pages}
                pageWidth={screenWidth - (20 + 20 * 2)}
              />
            </View>
            {/*카테고리별 아이콘*/}
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
                    params: { category: "연극/뮤지컬" },
                  })
                }
              >
                <Image source={require("../../assets/Icon/gallery.png")} />
                <Text>연극/뮤지컬</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.center}
                onPress={() =>
                  navigation.navigate("MainRoutes", {
                    screen: "CategoryDetail",
                    params: { category: "클래식/무용" },
                  })
                }
              >
                <Image source={require("../../assets/Icon/show.png")} />
                <Text>클래식/무용</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.center}
                onPress={() =>
                  navigation.navigate("MainRoutes", {
                    screen: "CategoryDetail",
                    params: { category: "콘서트" },
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
                    params: { category: "서커스/마술" },
                  })
                }
              >
                <Image source={require("../../assets/Icon/expo.png")} />
                <Text>서커스/마술</Text>
              </TouchableOpacity>
            </View>
          </ImageBackground>

          {/*사용자 위치*/}
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

          {/*공지사항*/}
          <View style={{ marginTop: 20 }}>
            <RowBox>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <BoldTextBL>
                  <Image source={require("../../assets/Icon/notice.png")} />
                  Notice
                </BoldTextBL>
              </View>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("MainRoutes", {
                    screen: "NoticeList",
                  })
                }
              >
                <IconImage
                  source={require("../../assets/Icon/rightArrow.png")}
                />
              </TouchableOpacity>
            </RowBox>
          </View>

          {/*추천*/}
          <View style={styles.center}>
            <UserRecommendData />
          </View>

          {/*best*/}
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
  row: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "nowrap",
    alignItems: "center",
    justifyContent: "flex-end",
    gap: 3,
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
    height: 45,
    width: 360,
    flexDirection: "row",
    flexWrap: "nowrap",
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

const RowBox = styled(View)`
  width: 312px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const UserGps = styled.Text`
  color: ${Theme.colors.SkyBlue};
  font-weight: 700;
`;
const BoldTextBL = styled(Text)`
  color: ${Theme.colors.Black};
  font-size: 20px;
  font-weight: bold;
  text-decoration: underline;
  align-items: center;
  justify-content: center;
`;
const IconImage = styled(Image)`
  width: 20px;
  height: 20px;
`;
