import React, { useEffect } from "react";
import { ScrollView, Text, View } from "react-native";
import ScrollViewLayout from "../Components/Layout/ScrollViewLayout";
import ContentBox from "./ContentBox";

const datas = [
  {
    category: "expo",
    id: 1,
    name: "별을 켜다",
    posterUrl:
      "https://www.enet.or.kr/files/attach/images/64330/613/078/cdeb716b65bbb2c6112a10719994e81b.jpg",
    startDate: "2022/01/02",
    finishDate: "2023/12/23",
    place: "광진구 yes24 Hall",
  },
  {
    category: "expo",
    id: 2,
    name: "별을 켜다",
    posterUrl:
      "https://www.enet.or.kr/files/attach/images/64330/613/078/cdeb716b65bbb2c6112a10719994e81b.jpg",
    startDate: "2022/01/02",
    finishDate: "2023/12/23",
    place: "광진구 yes24 Hall",
  },
  {
    category: "expo",
    id: 3,
    name: "별을 켜다",
    posterUrl:
      "https://www.enet.or.kr/files/attach/images/64330/613/078/cdeb716b65bbb2c6112a10719994e81b.jpg",
    startDate: "2022/01/02",
    finishDate: "2023/12/23",
    place: "광진구 yes24 Hall",
  },
  {
    category: "expo",
    id: 4,
    name: "별을 켜다",
    posterUrl:
      "https://www.enet.or.kr/files/attach/images/64330/613/078/cdeb716b65bbb2c6112a10719994e81b.jpg",
    startDate: "2022/01/02",
    finishDate: "2023/12/23",
    place: "광진구 yes24 Hall",
  },
  {
    category: "expo",
    id: 5,
    name: "별을 켜다",
    posterUrl:
      "https://www.enet.or.kr/files/attach/images/64330/613/078/cdeb716b65bbb2c6112a10719994e81b.jpg",
    startDate: "2022/01/02",
    finishDate: "2023/12/23",
    place: "광진구 yes24 Hall",
  },
];

function CategoryDetail({ route }) {
  const { category } = route.params;

  // 받은 카테고리에 따라서 데이터 송수신하기

  return (
    <ScrollViewLayout>
      {datas.map((data) => {
        return <ContentBox key={data.id} data={data} />;
      })}
    </ScrollViewLayout>
  );
}

export default CategoryDetail;
