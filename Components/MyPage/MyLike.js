import { Text } from "react-native";
import { useIsFocused, useNavigation } from "@react-navigation/native";
import { useEffect } from "react";
import PrMyLike from './Presenters/PrMyLike'
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
  } = useFetchMyLike(1, 8);
  console.log("MyLikedata", data);
  console.log("data.pages", data?.pages);

  const mylikeDatas = data?.pages?.flat();
  console.log("mylikeDatas", mylikeDatas);
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

  return <PrMyLike mylikeDatas={mylikeDatas} loadMore={loadMore}/>
}

export default MyLike
