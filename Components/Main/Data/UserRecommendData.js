import React, { useEffect } from "react";
import { ScrollView, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import UserRecommendBox from "../Presenters/UserRecommendBox";

function UserRecommendData({user}) {
  // const { category } = route.params;
  // 받은 카테고리에 따라서 데이터 송수신하기
  const datas = [
    {
      category: "exhibition",
      id: 1,
      name: "별을 켜다",
      posterUrl:
        "https://images.pexels.com/photos/139764/pexels-photo-139764.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      startDate: "2022/01/02",
      finishDate: "2023/12/23",
      place: "광진구 yes24 Hall",
    },
    {
      category: "show",
      id: 2,
      name: "별을 켜다",
      posterUrl:
        "https://images.pexels.com/photos/45258/ballet-production-performance-don-quixote-45258.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      startDate: "2022/01/02",
      finishDate: "2023/12/23",
      place: "광진구 yes24 Hall",
    },
    {
      category: "concert",
      id: 3,
      name: "별을 켜다",
      posterUrl:
        "https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      startDate: "2022/01/02",
      finishDate: "2023/12/23",
      place: "광진구 yes24 Hall",
    },
    {
      category: "expo",
      id: 4,
      name: "별을 켜다",
      posterUrl:
        "https://images.pexels.com/photos/12008093/pexels-photo-12008093.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      startDate: "2022/01/02",
      finishDate: "2023/12/23",
      place: "광진구 yes24 Hall",
    },
  ];

  const navigation = useNavigation();

  return <UserRecommendBox datas={datas} user={user}/>;
}

export default UserRecommendData;
