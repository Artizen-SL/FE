import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useState } from "react";
import { Image, View } from "react-native";
import styled from "styled-components/native";
import Dropdown from "../../Common/Dropdown/Dropdown";
import ScrollViewLayout from "../../Components/Layout/ScrollViewLayout";
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

function CategoryDetail({ route }) {
  const { category } = route.params;
  const [selected, setSelected] = useState(undefined);

  // 받은 카테고리에 따라서 데이터 송수신하기

  const baseURL = process.env.REACT_APP_BASE_URL;

  const {
    data: categoryDetails,
    isLoading,
    error: categoryDetailsError,
  } = useQuery(
    ["getCategoryDetails"],
    async () => {
      try {
        const { data } = await axios.get(`${baseURL}/artizens`);
        return data;
      } catch (error) {}
    },
    {
      onSuccess: () => {},
      onError: (error) => {
        throw error;
      },
    }
  );

  return (
    <View style={{ flex: 1 }}>
      <ScrollViewLayout>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            marginBottom: 10,
            marginTop: 10,
            alignItems: "center",
          }}
        >
          <Image
            source={require("../../assets/Icon/gallery.png")}
            style={{}}
          ></Image>
          <StyledText
            style={{
              fontSize: 20,
              fontWeight: "bold",
              paddingLeft: 10,
              textShadow: "1px 1px 11px rgba(0, 0, 0, 0.75)",
            }}
          >
            {category}
          </StyledText>
        </View>
        {datas.map((data) => {
          return <ContentBox key={data.id} data={data} />;
        })}
      </ScrollViewLayout>
      <Dropdown
        label="Select Item"
        data={dropDownData}
        onSelect={setSelected}
      />
    </View>
  );
}

export default CategoryDetail;

const StyledText = styled.Text`
  /* text-shadow-color: rgba(0, 0, 0, 0.25);
  text-shadow-offset: 0px 4px;
  text-shadow-radius: 3px;*/
  text-shadow: 0px 4px 3px rgba(0, 0, 0, 0.25);
`;
