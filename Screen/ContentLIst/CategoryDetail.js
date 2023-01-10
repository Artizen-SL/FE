import React, { useEffect } from "react";
import { Text, View } from "react-native";

function CategoryDetail({ route, navigation }) {
  const { category } = route.params;

  // 받은 카테고리에 따라서 데이터 송수신하기

  return (
    <View>
      <Text>CategoryDetail</Text>
      <Text>{category}</Text>
    </View>
  );
}

export default CategoryDetail;
