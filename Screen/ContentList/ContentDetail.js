import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Image, Dimensions } from "react-native";
import Theme from "../../Theme/Theme";
import Dropdown from "../../Common/Dropdown/Dropdown";
import FastImage from "react-native-fast-image";

import ScrollViewLayout from "../../Components/Layout/ScrollViewLayout";
import Carousel from "../../Common/Carousel/Carousel";
import useFetchContentDetail from "../../querys/category/useFetchContentDetail";
import ContentDetailInfoLine from "../../Components/ContentList/Presenters/ContentDetailInfoLineView";
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

  const [images, setImages] = useState([]);
  const [posterUrls, setPosterUrls] = useState([]);

  const {
    data: contentDetailData,
    isLoading,
    isError,
  } = useFetchContentDetail(id);
  // console.log("contentDetailData", contentDetailData);

  useEffect(() => {
    setPosterUrls([]);
    // posterUrl이 string인 경우
    if (typeof contentDetailData?.posterUrl === "string") {
      setPosterUrls((prev) => [
        ...prev,
        { posterUrl: contentDetailData?.posterUrl },
      ]);
    }

    // 배열인 경우
  }, [contentDetailData?.posterUrl]);
  // console.log(posterUrls);
  // console.log(contentDetailData?.posterUrl);
  useEffect(() => {
    const imagePromises = contentDetailData?.imageList?.map((img) => {
      return new Promise((resolve, reject) => {
        Image.getSize(
          img,
          (width, height) => {
            // successfully got image dimensions
            resolve({ url: img, width, height, ratio: width / height });
          },
          () => {
            // error case
            console.warn(`Error with ${img}`);
            resolve(null);
          }
        );
      });
    });

    if (imagePromises) {
      Promise.all(imagePromises)
        .then((images) => images.filter(Boolean))
        .then(setImages);
    }
  }, [contentDetailData]);

  console.log(images);

  return (
    <View style={{ flex: 1 }}>
      <ScrollViewLayout>
        <Carousel
          gap={10}
          offset={0}
          pages={posterUrls}
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
            infoText={
              contentDetailData?.staff === ""
                ? "없음"
                : contentDetailData?.staff
            }
          />
          <ContentDetailInfoLine
            tagView={"장소"}
            infoText={
              contentDetailData?.facility === ""
                ? "없음"
                : contentDetailData?.facility
            }
          />
          {/* <ContentDetailInfoLine
            tagView={"시간"}
            infoText={contentDetailData?.date ?? "없음"}
          /> */}
          <ContentDetailInfoLine
            tagView={"기간"}
            infoText={
              contentDetailData?.date === "" ? "없음" : contentDetailData?.date
            }
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
        <View style={detailStyles.detailImagesContainer}>
          {images?.map((image, idx) => {
            return (
              // <View key={idx} style={detailStyles.detailImageContainer}>
              <View
                style={{
                  width: "100%",
                  height: (screenWidth - 20) * (1 / image.ratio),
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image
                  key={idx}
                  // resizeMode="contain"
                  resizeMode={FastImage.resizeMode.contain}
                  source={{
                    uri: image.url,
                    // uri: "http://www.kopis.or.kr/upload/pfmPoster/PF_PF203891_221209_092426.gif",
                  }}
                  // style={detailStyles.detailImage}
                  style={{
                    width: "100%",
                    height: "100%",
                    // width: image.width,
                    // height: image.height,
                    // borderWidth: 1,
                  }}
                ></Image>
              </View>
            );
          })}
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
  detailImagesContainer: {
    // flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
    paddingBottom: 350,
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
