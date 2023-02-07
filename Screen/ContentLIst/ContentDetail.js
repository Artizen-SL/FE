import React, { useState } from "react";
import { StyleSheet, Text, View, Image, Dimensions } from "react-native";
import Theme from "../../Theme/Theme";
import Dropdown from "../../Common/Dropdown/Dropdown";

import ScrollViewLayout from "../../Components/Layout/ScrollViewLayout";
import ContentDetailInfoLine from "../../Presenters/ContentList/ContentDetailInfoLineView";
import Carousel from "../../Common/Carousel/Carousel";
import { useQuery } from "@tanstack/react-query";
import useFetchContentDetail from "../../querys/category/useFetchContentDetail";

const PAGES = [
  {
    num: 1,
    color: "#86E3CE",
  },
  {
    num: 2,
    color: "#D0E6A5",
  },
  {
    num: 3,
    color: "#FFDD94",
  },
  {
    num: 4,
    color: "#FA897B",
  },
  {
    num: 5,
    color: "#CCABD8",
  },
];
const dropDownData = [
  {
    label: "미술관",
    Routes: "MainRoutes",
    screen: "CategoryDetail",
    params: { category: "FineArtList" },
  },
  {
    label: "전시회",
    Routes: "MainRoutes",
    screen: "CategoryDetail",
    params: { category: "ShowList" },
  },
  {
    label: "콘서트",
    Routes: "MainRoutes",
    screen: "CategoryDetail",
    params: { category: "ConcertList" },
  },
  {
    label: "박물관",
    Routes: "MainRoutes",
    screen: "CategoryDetail",
    params: { category: "ExpoList" },
  },
];

// 전시회
// 연극/뮤지컬
// 콘서트
// 클래식/무용

function ContentDetail({ route }) {
  const { id, category } = route.params;
  const [selected, setSelected] = useState(undefined);

  const screenWidth = Math.round(Dimensions.get("window").width);
  //  pageWidth={screenWidth - (gap + padding * 2)}

  // 받은 카테고리에 따라서 데이터 송수신하기

  const {
    data: contentDetailData,
    isLoading,
    isError,
  } = useFetchContentDetail(id);
  console.log("contentDetailData", contentDetailData);

  // console.log(contentDetail);

  return (
    <View style={{ flex: 1 }}>
      <ScrollViewLayout>
        <Carousel
          gap={10}
          offset={0}
          pages={PAGES}
          pageWidth={screenWidth - (10 + 10 * 2)}
        />

        <View style={detailStyles.divideLine} />
        <View style={[detailStyles.contentInfoWrapper]}>
          <View style={{ marginBottom: 30 }}>
            <Text style={detailFontStyles.headLine2}>
              전시<Text style={[detailColorStyles.skyBlue]}> 정보</Text>
            </Text>
            <View style={[detailStyles.textLine, { width: 80 }]} />
          </View>
          <ContentDetailInfoLine
            tagView={"스태프"}
            infoText={contentDetailData?.staff}
          />
          <ContentDetailInfoLine
            tagView={"장소"}
            infoText={contentDetailData?.place}
          />
          <ContentDetailInfoLine tagView={"시간"} infoText={"10:00 ~ 21:00"} />
          <ContentDetailInfoLine
            tagView={"기간"}
            infoText={contentDetailData?.date}
          />
        </View>
        <View style={detailStyles.divideLine} />

        <Text
          style={[
            detailStyles.contentInfoWrapper,
            detailFontStyles.headLine2,
            { marginVertical: 20 },
          ]}
        >
          <Text style={[detailColorStyles.skyBlue]}>
            {contentDetailData?.name}
          </Text>
          <Text> 소개입니다.</Text>
        </Text>

        {!contentDetailData?.content ? (
          <>
            <Text
              style={[
                detailStyles.contentInfoWrapper,
                detailFontStyles.mainText,
                { marginVertical: 0, marginBottom: 15 },
              ]}
            >
              내용이 없습니다.
            </Text>
          </>
        ) : (
          <Text
            style={[
              detailStyles.contentInfoWrapper,
              detailFontStyles.mainText,
              { marginVertical: 0, marginBottom: 15 },
            ]}
          >
            {contentDetailData?.content}
          </Text>
        )}
        <View style={detailStyles.detailImageContainer}>
          <Image
            source={{
              uri: "https://www.enet.or.kr/files/attach/images/64330/613/078/cdeb716b65bbb2c6112a10719994e81b.jpg",
            }}
            style={detailStyles.detailImage}
          ></Image>
        </View>

        <View style={detailStyles.detailImageContainer}>
          <Image
            source={{
              uri: "http://storage.enuri.info/pic_upload/knowbox2/202107/073552927202107105b8bf0db-4614-4a57-83f7-fbe8bc69e5c1.JPEG",
            }}
            style={detailStyles.detailImage}
          ></Image>
        </View>

        <View style={detailStyles.divideLine} />
      </ScrollViewLayout>
      <Dropdown
        label="Select Item"
        data={dropDownData}
        onSelect={setSelected}
      />
    </View>
  );
}

export default ContentDetail;

const detailStyles = StyleSheet.create({
  StImgWrapper: {
    borderRadius: 20,
    // height: 200,
    height: Dimensions.get("window").height / 2,
    width: "100%",
    marginBottom: 20,
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

  divideLine: {
    borderBottomColor: Theme.colors.Gray,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  textLine: {
    borderBottomColor: Theme.colors.Gray,
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginTop: 3,
  },
  contentInfoText: {
    flexDirection: "row",
  },

  contentInfoWrapper: {
    paddingHorizontal: Dimensions.get("window").width / 15,
    marginVertical: 30,
  },
  detailImageContainer: {
    flex: 1,
    alignItems: "center",
    height: "100%",
    textAlign: "center",
    marginTop: 15,
    marginBottom: 15,
    // borderWidth: 1,
    // borderStyle: "solid",
    // borderColor: "black",
  },
  detailImage: {
    resizeMode: "contain",
    height: Dimensions.get("window").height / 2,
    width: "100%",
  },
});

const detailColorStyles = StyleSheet.create({
  skyBlue: {
    color: Theme.colors.SkyBlue,
  },
});

const detailFontStyles = StyleSheet.create({
  headLine2: {
    fontSize: 20,
    fontWeight: "bold",
  },
  mainText: {
    fontSize: 15,
  },
});
