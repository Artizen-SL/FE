import { Text } from "react-native";
import { useIsFocused, useNavigation } from "@react-navigation/native";
import { useEffect } from "react";
import PrMyTicket from './Presenters/PrMyTicket'
import useFetchMyTicket from '../../querys/mypage/useFetchMyTicket'

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

  console.log("data", data);
  console.log("data.pages", data?.pages);

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

  if (isError) {
    return <Text>{error?.message}</Text>;
  }
  
  return <PrMyTicket navigation={navigation} myTicketDatas={myTicketDatas} loadMore={loadMore}/>
}

export default MyTicket
