import { useNavigation } from "@react-navigation/native";
import React from "react";

import {
  FlatList,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import styled from "styled-components/native";
import TagView from "../../Components/Elem/TagView";
import CommunityContentsWrapper from "../../Components/Community/Presenters/CommunityContentsWrapper";

const communityMainItems = [
  {
    id: 1,
    tag: "자유글",
    title: "title",
    content: "content",
    date: "2022/01/1 12:00",
    nickname: "nickname",
    commentNum: "12",
  },
  {
    id: 2,
    tag: "동행구함",
    title: "title",
    content: "content",
    date: "2022/01/1 12:00",
    nickname: "nickname",
    commentNum: "12",
  },
  {
    id: 3,
    tag: "나눔",
    title: "title",
    content: "content",
    date: "2022/01/1 12:00",
    nickname: "nickname",
    commentNum: "12",
  },
  {
    id: 4,
    tag: "자유글",
    title: "title",
    content: "content",
    date: "2022/01/1 12:00",
    nickname: "nickname",
    commentNum: "12",
  },
  {
    id: 5,
    tag: "자유글",
    title: "title",
    content: "content",
    date: "2022/01/1 12:00",
    nickname: "nickname",
    commentNum: "12",
  },
  {
    id: 6,
    tag: "자유글",
    title: "title",
    content: "content",
    date: "2022/01/1 12:00",
    nickname: "nickname",
    commentNum: "12",
  },
  {
    id: 7,
    tag: "자유글",
    title: "title",
    content: "content",
    date: "2022/01/1 12:00",
    nickname: "nickname",
    commentNum: "12",
  },
  {
    id: 8,
    tag: "자유글",
    title: "title",
    content: "content",
    date: "2022/01/1 12:00",
    nickname: "nickname",
    commentNum: "12",
  },
  {
    id: 9,
    tag: "자유글",
    title: "title",
    content: "content",
    date: "2022/01/1 12:00",
    nickname: "nickname",
    commentNum: "12",
  },
  {
    id: 10,
    tag: "자유글",
    title: "title",
    content: "content",
    date: "2022/01/1 12:00",
    nickname: "nickname",
    commentNum: "12",
  },
  {
    id: 11,
    tag: "자유글",
    title: "title",
    content: "content",
    date: "2022/01/1 12:00",
    nickname: "nickname",
    commentNum: "12",
  },
];

const CommunityMain = () => {
  const navigation = useNavigation();

  const renderItem = ({ item }) => {
    return (
      <StCommuContentWrapper
        onPress={() =>
          navigation.navigate("CommunityRoutes", {
            screen: "CommunityDetail",
            params: { commuContentId: item.id },
          })
        }
      >
        <StCommuContentTitle>
          <TagView variant="community" tag={item.tag}>
            {item.tag}
          </TagView>
          <StTitleWrapper>
            <StTitle numberOfLines={1} ellipsizeMode="tail">
              {item.title}
            </StTitle>
          </StTitleWrapper>
        </StCommuContentTitle>
        <View>
          <StSubText numberOfLines={1} ellipsizeMode="tail">
            {item.content}
          </StSubText>
        </View>
        <View>
          <StSubText numberOfLines={1} ellipsizeMode="tail">
            {item.date} / {item.nickname}
          </StSubText>
        </View>
      </StCommuContentWrapper>
    );
  };

  return (
    <CommunityContentsWrapper title="Community">
      {
        <FlatList
          // ListHeaderComponent={<></>}
          renderItem={renderItem}
          data={communityMainItems}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{}}
          // ListFooterComponent={}
        />
      }
    </CommunityContentsWrapper>
  );
};

export default CommunityMain;

const StCommuContentWrapper = styled(TouchableOpacity)`
  display: flex;
  height: 70px;
  margin: 10px 10px;
  border-color: #ddd;
  border-bottom-width: 1px;
`;

const StCommuContentTitle = styled(View)`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const StTitle = styled(Text)`
  margin-left: 10px;
  font-weight: bold;
`;

const StTitleWrapper = styled(View)`
  display: flex;
  flex-wrap: nowrap;
  width: 80%;
`;

const StSubText = styled(Text)`
  color: gray;
`;
