import React from "react";
import { Text, View } from "react-native";
import useFetchMyPage from "../../querys/mypage/useFetchMyPage";

function Test() {
  const { data: myPageDatas } = useFetchMyPage();
  // console.log("myPageDatas", myPageDatas);

  return (
    <View>
      <Text>test</Text>
      <Text>test1</Text>
      <Text>test2</Text>
      <Text>test3</Text>
      <Text>test4</Text>
      <Text>test4</Text>
      <Text>test5</Text>
    </View>
  );
}

export default Test;
