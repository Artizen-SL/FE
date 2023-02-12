import { Text } from "react-native";
import { useIsFocused, useNavigation } from "@react-navigation/native";
import { useEffect } from "react";
import PrMyPost from "./Presenters/PrMyPost";
import useFetchMyPost from "../../querys/mypage/useFetchMyPost";

const MyPost = () => {
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
  } = useFetchMyPost(1, 8);

  console.log("data", data);
  console.log("data.pages", data?.pages);

  const myPostDatas = data?.pages?.flat();

  useEffect(() => {
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

  if (isError) {
    return <Text>{error?.message}</Text>;
  }
  return <PrMyPost myPostDatas={myPostDatas} loadMore={loadMore} />;
};

export default MyPost;
