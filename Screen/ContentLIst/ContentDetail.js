import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import Theme from "../../Theme/Theme";
import TagView from "../Components/Elem/TagView";
import ScrollViewLayout from "../Components/Layout/ScrollViewLayout";
import ContentDetailInfoLine from "./ContentDetailInfoLine";

function ContentDetail({ route }) {
  const { category, id } = route.params.params;
  console.log(category, id);
  return (
    <ScrollViewLayout>
      <View style={detailStyles.StImgWrapper}>
        <Image
          source={{
            uri: "https://www.enet.or.kr/files/attach/images/64330/613/078/cdeb716b65bbb2c6112a10719994e81b.jpg",
          }}
          style={detailStyles.StImg}
        />
      </View>
      <View style={detailStyles.divideLine} />

      <View>
        <View style={detailStyles.textLine} />
        <Text>
          전시<Text> 정보</Text>
        </Text>
      </View>
      <View>
        <View style={detailStyles.contentInfoText}>
          <TagView>기간</TagView>
          <Text>{category}</Text>
        </View>
        <View style={detailStyles.contentInfoText}>
          <TagView>작가</TagView>
          <Text>{category}</Text>
        </View>
        <View style={detailStyles.contentInfoText}>
          <TagView>장소</TagView>
          <Text>{category}</Text>
        </View>
        <View style={detailStyles.contentInfoText}>
          <TagView>시간</TagView>
          <Text>{category}</Text>
        </View>
        <ContentDetailInfoLine tagView={"기간"} infoText={"2022 ~ 2023"} />
      </View>
      <View style={detailStyles.divideLine} />
      <Text>
        뉴욕타임스<Text> {category} 소개입니다.</Text>
      </Text>
      <Text>
        (더미멘트입니다)4대에 걸친 재일조선인 가족의 이야기를 그린 세계적
        베스트셀러, 이민진 작가의 장편소설 《파친코》가 새롭게 출간되었다.
        《파친코》는 재미교포 1.5세대인 이민진 작가가 30년에 달하는 세월에 걸쳐
        집필한 대하소설로, 2017년 출간되어 《뉴욕타임스》 베스트셀러에 올랐다.
        현재까지 전 세계 33개국에 번역 수출되었으며, BBC, 아마존 등 75개 이상의
        주요 매체의 ‘올해의 책’으로 선정되었을 뿐 아니라 전미도서상 최종 후보에
        이름을 올리며 평단과 대중을 모두 사로잡은 작품이다. 버락 오바마 전 미국
        대통령으로부터 “회복과 연민에 대한 강력한 이야기”라는 찬사를 받으며
        주목을 받았다.지난 4월 판권 계약이 종료되며 절판되었던 《파친코》는
        새로운 번역과 디자인으로 한국 독자에게 돌아왔다. (더미멘트입니다)4대에
        걸친 재일조선인 가족의 이야기를 그린 세계적 베스트셀러, 이민진 작가의
        장편소설 《파친코》가 새롭게 출간되었다. 《파친코》는 재미교포 1.5세대인
        이민진 작가가 30년에 달하는 세월에 걸쳐 집필한 대하소설로, 2017년
        출간되어 《뉴욕타임스》 베스트셀러에 올랐다. 현재까지 전 세계 33개국에
        번역 수출되었으며, BBC, 아마존 등 75개 이상의 주요 매체의 ‘올해의
        책’으로 선정되었을 뿐 아니라 전미도서상 최종 후보에 이름을 올리며 평단과
        대중을 모두 사로잡은 작품이다. 버락 오바마 전 미국 대통령으로부터
        “회복과 연민에 대한 강력한 이야기”라는 찬사를 받으며 주목을 받았다.지난
        4월 판권 계약이 종료되며 절판되었던 《파친코》는 새로운 번역과
        디자인으로 한국 독자에게 돌아왔다.
      </Text>
      <Image
        source={{
          uri: "https://www.enet.or.kr/files/attach/images/64330/613/078/cdeb716b65bbb2c6112a10719994e81b.jpg",
        }}
      ></Image>
      <View style={detailStyles.divideLine} />
    </ScrollViewLayout>
  );
}

export default ContentDetail;

const detailStyles = StyleSheet.create({
  StImgWrapper: {
    borderRadius: 20,
    height: 200,
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
    width: 60,
    borderBottomColor: Theme.colors.Gray,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  contentInfoText: {
    flexDirection: "row",
  },
});
