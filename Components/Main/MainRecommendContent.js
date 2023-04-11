import React from "react";
import { useNavigation } from "@react-navigation/native";
import UserRecommendBox from "./Presenters/UserRecommendBox";

function MainRecommendContent({ user, datas }) {
  const navigation = useNavigation();

  return <UserRecommendBox datas={datas} user={user} navigation={navigation} />;
}

export default MainRecommendContent;
