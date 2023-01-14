import React, { useEffect, useRef, useState } from "react";
import { StyleSheet, Text, View, Image, Dimensions } from "react-native";
import Theme from "../../Theme/Theme";
import Dropdown from "../Common/Dropdown/Dropdown";
import TagView from "../Components/Elem/TagView";
import ScrollViewLayout from "../Components/Layout/ScrollViewLayout";
import ContentDetailInfoLine from "./ContentDetailInfoLine";
import Carousel from "../Common/Carousel/Carousel";

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
const data = [
  { label: "One", value: "1" },
  { label: "Two", value: "2" },
  { label: "Three", value: "3" },
  { label: "Four", value: "4" },
  { label: "Five", value: "5" },
];

function ContentDetail({ route }) {
  const { category, id } = route.params.params;
  const [selected, setSelected] = useState(undefined);

  const screenWidth = Math.round(Dimensions.get("window").width);

  //  pageWidth={screenWidth - (gap + padding * 2)}
  return (
    <View style={{ flex: 1 }}>
      <ScrollViewLayout>
        <Carousel
          gap={20}
          offset={0}
          pages={PAGES}
          pageWidth={screenWidth - (20 + 20 * 2)}
        />

        <View style={detailStyles.divideLine} />
        <View style={[detailStyles.contentInfoWrapper]}>
          <View style={{ marginBottom: 30 }}>
            <Text style={detailFontStyles.headLine2}>
              전시<Text style={[detailColorStyles.skyBlue]}> 정보</Text>
            </Text>
            <View style={[detailStyles.textLine, { width: 80 }]} />
          </View>
          <ContentDetailInfoLine tagView={"작가"} infoText={"서지운"} />
          <ContentDetailInfoLine tagView={"장소"} infoText={"천안"} />
          <ContentDetailInfoLine tagView={"시간"} infoText={"10:00 ~ 21:00"} />
          <ContentDetailInfoLine tagView={"기간"} infoText={"2022 ~ 2023"} />
        </View>
        <View style={detailStyles.divideLine} />
        {!!selected && (
          <Text>
            Selected: label = {selected.label} and value = {selected.value}
          </Text>
        )}
        <Text
          style={[
            detailStyles.contentInfoWrapper,
            detailFontStyles.headLine2,
            { marginVertical: 20 },
          ]}
        >
          <Text style={[detailColorStyles.skyBlue]}>뉴욕타임스</Text>
          <Text> {category} 소개입니다.</Text>
        </Text>

        <Text
          style={[
            detailStyles.contentInfoWrapper,
            detailFontStyles.mainText,
            { marginVertical: 0, marginBottom: 15 },
          ]}
        >
          (더미멘트입니다)4대에 걸친 재일조선인 가족의 이야기를 그린 세계적
          베스트셀러, 이민진 작가의 장편소설 《파친코》가 새롭게 출간되었다.
          《파친코》는 재미교포 1.5세대인 이민진 작가가 30년에 달하는 세월에
          걸쳐 집필한 대하소설로, 2017년 출간되어 《뉴욕타임스》 베스트셀러에
          올랐다. 현재까지 전 세계 33개국에 번역 수출되었으며, BBC, 아마존 등
          75개 이상의 주요 매체의 ‘올해의 책’으로 선정되었을 뿐 아니라
          전미도서상 최종 후보에 이름을 올리며 평단과 대중을 모두 사로잡은
          작품이다. 버락 오바마 전 미국 대통령으로부터 “회복과 연민에 대한
          강력한 이야기”라는 찬사를 받으며 주목을 받았다.지난 4월 판권 계약이
          종료되며 절판되었던 《파친코》는 새로운 번역과 디자인으로 한국
          독자에게 돌아왔다. (더미멘트입니다)4대에 걸친 재일조선인 가족의
          이야기를 그린 세계적 베스트셀러, 이민진 작가의 장편소설 《파친코》가
          새롭게 출간되었다. 《파친코》는 재미교포 1.5세대인 이민진 작가가
          30년에 달하는 세월에 걸쳐 집필한 대하소설로, 2017년 출간되어
          《뉴욕타임스》 베스트셀러에 올랐다. 현재까지 전 세계 33개국에 번역
          수출되었으며, BBC, 아마존 등 75개 이상의 주요 매체의 ‘올해의 책’으로
          선정되었을 뿐 아니라 전미도서상 최종 후보에 이름을 올리며 평단과
          대중을 모두 사로잡은 작품이다. 버락 오바마 전 미국 대통령으로부터
          “회복과 연민에 대한 강력한 이야기”라는 찬사를 받으며 주목을
          받았다.지난 4월 판권 계약이 종료되며 절판되었던 《파친코》는 새로운
          번역과 디자인으로 한국 독자에게 돌아왔다.
        </Text>
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
      <Dropdown label="Select Item" data={data} onSelect={setSelected} />
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
