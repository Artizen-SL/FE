import React from "react";
import { View,ScrollView,ImageBackground,Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AsyncStorage } from "react-native";

const MyPage = () => {
  return (
    <>
    <ImageBackground source={1}/>
    <ScrollView>
      <View><Image /><Text>username</Text></View>
      <View>
        <View><Image />
        <Text>마이티켓</Text></View>
        
        <View><Image />
        <Text>좋아요</Text></View>
        
        <View><Image />
        <Text>내가 쓴 글</Text></View>
        
        <View><Image />
        <Text>채팅 목록</Text></View>
      </View>
      <View> <View><Image />
        <Text>마이티켓</Text></View>
      <View><Image />
        <Text>좋아요</Text></View>
      <View><Image />
        <Text>내가 쓴 글</Text></View>
      <View><Image />
        <Text>채팅 목록</Text></View></View>

        <View><View><Text>공지</Text><Text>공지사항 입니다.</Text></View></View>
     
    </ScrollView>
    </>
  )
}

export default MyPage