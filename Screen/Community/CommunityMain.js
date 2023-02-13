import { useIsFocused, useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";

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
import useFetchCommunity, {
  getCommunity,
} from "../../querys/community/useFetchCommunity";
import { useInfiniteQuery } from "@tanstack/react-query";

const CommunityMain = () => {
  const navigation = useNavigation();
  const isFocused = useIsFocused();

  const {
    data,
    isLoading,
    isError,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
    refetch,
  } = useInfiniteQuery({
    queryKey: ["getCommunity"],
    queryFn: async ({ pageParam = 0 }) => {
      const { data } = await getCommunity(pageParam, 10);

      const { communityList: page, isLast } = data;
      return { page, nextPage: pageParam + 1, isLast };
    },
    getNextPageParam: (lastPage, page) => {
      return !lastPage.isLast ? lastPage.nextPage : undefined;
    },
  });

  const communityMainDatas = data?.pages.flatMap((item) => {
    return item.page.flat();
  });

  useEffect(() => {
    if (isFocused) {
      console.log("refetch");
      refetch({
        refetchPage: (page, index) => {
          index === 0;
        },
      });
    }
  }, [isFocused]);

  const loadMore = () => {
    if (hasNextPage) {
      console.log("fetching!");
      fetchNextPage();
    }
  };

  const renderItem = ({ item }) => {
    return (
      <StCommuContentWrapper
        onPress={() =>
          navigation.navigate("CommunityRoutes", {
            screen: "CommunityDetail",
            params: {
              id: item?.id,
            },
          })
        }
      >
        <StCommuContentTitle>
          <TagView variant="community" tag={item?.tag ?? "자유글"}>
            {item?.tag ?? "자유글"}
          </TagView>
          <StTitleWrapper>
            <StTitle numberOfLines={1} ellipsizeMode="tail">
              {item?.title}
            </StTitle>
          </StTitleWrapper>
        </StCommuContentTitle>
        <View>
          <StSubText numberOfLines={1} ellipsizeMode="tail">
            {item?.content}
          </StSubText>
        </View>
        <View>
          <StSubText numberOfLines={1} ellipsizeMode="tail">
            {item?.createdAt?.slice(0, 10)} {item?.createdAt?.slice(11, 16)} /{" "}
            {item?.nickname ?? "익명"}
          </StSubText>
        </View>
      </StCommuContentWrapper>
    );
  };

  return (
    <CommunityContentsWrapper title="Community">
      <FlatList
        // ListHeaderComponent={<></>}
        renderItem={renderItem}
        data={communityMainDatas}
        keyExtractor={(item) => item?.id}
        onEndReached={loadMore}
        onEndReachedThreshold={0.2}
        // contentContainerStyle={{}}
        // ListFooterComponent={}
      />
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
