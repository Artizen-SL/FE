import {
  StyleSheet,
  View,
  Alert,
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
import UserRecommendData from "../../Components/Main/MainRecommendContent";
import useGpsRes from "../../utils/useGpsRes";
import useFetchImportantNotice from "../../querys/notice/useFetchImportantNotice";
import MainRecentlyContent from "../../Components/Main/MainRecentlyContent";
import MainBestContent from "../../Components/Main/MainBestContent";
import MainCarouselData from "../../Components/Main/Data/MainCarouselData";
import MainNotice from "../../Components/Main/MainNotice";
import AsyncStorage from "@react-native-async-storage/async-storage";
import useFetchMyPage from "../../querys/mypage/useFetchMyPage";
import useFetchLocation from "../../querys/Main/useFetchLocation";
import IsLoading from "../../Common/IsLoading/IsLoading";
import MainRecommendContent from "../../Components/Main/Presenters/UserRecommendBox";
import Layout from "../../Components/Layout/Layout";
const Main = ({ navigation }) => {
  const screenWidth = Math.round(Dimensions.get("window").width);

  const pages = MainCarouselData();

  const [gpsRes, setGpsRes] = useState({
    region: "Loading...",
    district: "",
    latitude: "",
    longitude: "",
  });

  const resetGpsAsk = async () => {
    const { region, district, disagree, latitude, longitude } =
      await useGpsRes();
    setGpsRes({
      ...gpsRes,
      region: region,
      district: district,
      latitude: latitude,
      longitude: longitude,
    });
  };

  useEffect(() => {
    const location = resetGpsAsk();
    if (typeof location === "object") {
      setGpsRes({ ...gpsRes, region: "", district: "" });
      resetGpsAsk();
    }
  }, []);

  const { data: locationData, refetch, remove } = useFetchLocation(gpsRes);
  const { data: datas, isError, isLoading } = useFetchImportantNotice();
  const { data: myPageDatas } = useFetchMyPage();

  return (
    <ScrollViewLayout>
      {/* <MainView /> */}
      <ImageBackground
        source={require("../../assets/background/main.png")}
        style={styles.bgImage}
      >
        <View style={[styles.container, styles.header]}>
          {/*메인카루셀*/}
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
                onPress={() => {
                  Alert.alert("서비스 준비중 입니다.");
                }}
              >
                <Circle>
                  <Logo source={require("../../assets/Icon/gallery.png")} />
                </Circle>
                <Text>전시회</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.center}
                onPress={() =>
                  navigation.navigate("MainRoutes", {
                    screen: "CategoryDetail",
                    params: { category: "연극/뮤지컬" },
                  })
                }
              >
                <Circle>
                  <Logo source={require("../../assets/Icon/musical.png")} />
                </Circle>
                <Text>연극/뮤지컬</Text>
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
                <Circle>
                  <Logo source={require("../../assets/Icon/concert.png")} />
                </Circle>
                <Text>콘서트</Text>
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
                <Circle>
                  <Logo source={require("../../assets/Icon/classic.png")} />
                </Circle>

                <Text>클래식/무용</Text>
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
                <Circle>
                  <Logo source={require("../../assets/Icon/magic.png")} />
                </Circle>
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
            <LongBox>
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
            </LongBox>
          </View>

          {/*공지사항*/}
          <View style={{ marginTop: 20 }}>
            <RowBox>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("NoticeRoutes", {
                    screen: "Notice",
                  })
                }
              >
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Logo source={require("../../assets/Icon/notice.png")} />
                  <BoldTextBL style={{ marginLeft: 6 }}>Notice</BoldTextBL>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("NoticeRoutes", {
                    screen: "Notice",
                  })
                }
              >
                <IconImage
                  source={require("../../assets/Icon/rightArrow.png")}
                />
              </TouchableOpacity>
            </RowBox>
            <MainNotice datas={datas} />
          </View>

          {/*추천*/}
          {locationData && locationData.length > 0 ? (
            <View>
              <MainRecommendContent
                user={myPageDatas.nickname}
                datas={locationData}
              />
            </View>
          ) : (
            <Text>위치정보를 가져오고 있습니다.</Text>
          )}

          {/*best*/}
          <View style={{ marginTop: 30 }}>
            <View style={{ flexDirection: "row", marginLeft: 15 }}>
              <Logo source={require("../../assets/Icon/best.png")} />
              <BoldTextBL style={{ marginLeft: 6 }}>Best Artizen</BoldTextBL>
            </View>

            <MainBestContent />
          </View>

          {/*new*/}
          <View style={{ marginTop: 20 }}>
            <View style={{ flexDirection: "row", marginLeft: 15 }}>
              <Logo source={require("../../assets/Icon/new.png")} />
              <BoldTextBL style={{ marginLeft: 6 }}>NEW Artizen</BoldTextBL>
            </View>
            <MainRecentlyContent />
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

  logo: {
    width: "117px",
    height: "32px",
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
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
  whiteBackground: {
    width: "100%",
    height: 363,
  },
  headerarea: {
    flex: 1,
    height: 45,
    width: 100,
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

const Center = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
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
const LogoTitle = styled(Image)`
  width: 76px;
  height: 16px;
  margin-left: 6px;
`;
const Profile = styled(Image)`
  width: 50px;
  height: 50px;
  border-radius: 25px;
`;
const Logo = styled(Image)`
  width: 30px;
  height: 30px;
`;
const Circle = styled(View)`
  width: 60px;
  height: 60px;
  border-radius: 30px;
  border: 1px solid ${Theme.colors.LightGray};
  background-color: ${Theme.colors.White};
  align-items: center;
  justify-content: center;
`;

const Headerarea = styled(View)`
  flex: 1;
  height: 60px;
  width: 100%;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  padding-left: 5%;
  padding-right: 5%;
`;

const LongBox = styled(View)`
  flex: 1;
  height: 34px;
  width: 80%;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  padding-left: 5%;
  padding-right: 5%;
  border-radius: 5px;
  background-color: ${Theme.colors.White};
  margin-top: 20px;
`;

const LogoBox = styled(View)`
  width: 117px;
  height: 32px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  align-items: center;
`;
