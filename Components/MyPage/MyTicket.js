import { Text } from "react-native";
import { useIsFocused, useNavigation } from "@react-navigation/native";
import { useEffect } from "react";
import PrMyTicket from "./Presenters/PrMyTicket";
import useFetchMyTicket from "../../querys/mypage/useFetchMyTicket";
import useDelCommunity from "../../querys/community/useDelCommunity";

const MyTicket = () => {
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
  } = useFetchMyTicket(1, 8);

  const myTicketDatas = data?.pages?.flat();

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

  const { mutate: delCommunityMutate } = useDelCommunity();

  if (isError) {
    return <Text>{error?.message}</Text>;
  }

  return (
    <PrMyTicket
      navigation={navigation}
      myTicketDatas={myTicketDatas}
      loadMore={loadMore}
    />
  );
};

export default MyTicket;
