import { Text } from "react-native";
import { useIsFocused, useNavigation } from "@react-navigation/native";
import { useEffect } from "react";
import PrMyLike from "./Presenters/PrMyLike";
import useFetchMyLike from "../../querys/mypage/useFetchMyLike";

const MyLike = () => {
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
    remove,
  } = useFetchMyLike();

  // console.log(data?.pages)
  const mylikeDatas = data?.pages?.flatMap((item) => {
    return item?.page?.flat();
  });
  // console.log("mylikeDatas",mylikeDatas)

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

  if (isError) {
    return <Text>{error?.message}</Text>;
  }

  return (
    <PrMyLike
      mylikeDatas={mylikeDatas}
      loadMore={loadMore}
      navigation={navigation}
    />
  );
};

export default MyLike;
