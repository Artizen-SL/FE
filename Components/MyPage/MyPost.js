import { Text, Alert } from "react-native";
import { useQueryClient } from "@tanstack/react-query";

import { useIsFocused, useNavigation } from "@react-navigation/native";
import { useEffect } from "react";
import PrMyPost from "./Presenters/PrMyPost";
import useFetchMyPost from "../../querys/mypage/useFetchMyPost";
import useDelCommunity from "../../querys/community/useDelCommunity";

const MyPost = () => {
  const navigation = useNavigation();
  const queryClient = useQueryClient();
  const isFocused = useIsFocused();
  const {
    data,
    isLoading,
    isError,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
    refetch,
    remove,
  } = useFetchMyPost();

  const myPostDatas = data?.pages?.flatMap((item) => {
    return item?.page?.flat();
  });


  useEffect(() => {
    remove();
    refetch({
      refetchPage: (page, index) => {
        index === 0;
      },
    });
  }, [isFocused]);

  const loadMore = () => {
    if (hasNextPage) {
      fetchNextPage();
    }
  };

  const { mutate: delCommunityMutate } = useDelCommunity();

  const onPressHandler = (id) => {
    Alert.alert("확인", "정말 삭제하시겠습니까?", [
      {
        text: "취소",
        style: "cancel",
      },
      {
        text: "OK",
        onPress: () => {
          delCommunityMutate(id, {
            onSuccess: (data, variable, context) => {
              Alert.alert("삭제완료");
              queryClient.invalidateQueries("getCommunity");
              refetch();
              navigation.navigate("MyPageRoutes", {
                screen: "MyPage",
              });
            },
            onError: (error, variable, context) => {
              Alert.alert("삭제실패");
            },
          });
        },
      },
    ]);
  };

  if (isError) {
    return <Text>{error?.message}</Text>;
  }
  return (
    <PrMyPost
      navigation={navigation}
      myPostDatas={myPostDatas}
      loadMore={loadMore}
      onPressHandler={onPressHandler}
    />
  );
};

export default MyPost;
