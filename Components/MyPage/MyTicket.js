import { Text,Alert } from "react-native";
import { useIsFocused, useNavigation } from "@react-navigation/native";
import { useEffect } from "react";
import PrMyTicket from "./Presenters/PrMyTicket";
import useFetchMyTicket from "../../querys/mypage/useFetchMyTicket";
import useDelMyTicket from "../../querys/mypage/useDelMyTicket";

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
    remove,
  } = useFetchMyTicket(1, 8);

  const myTicketDatas = data?.pages?.flat();

  useEffect(() => {
    remove(),
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

  const { mutate: delMyTicketMutate } = useDelMyTicket();

  const onPressHandler = (id) => {
    Alert.alert("확인", "정말 삭제하시겠습니까?", [
      {
        text: "취소",
        style: "cancel",
      },
      {
        text: "OK",
        onPress: () => {
          delMyTicketMutate(id, {
            onSuccess: (data, variable, context) => {
              Alert.alert("삭제완료");
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
    <PrMyTicket
      navigation={navigation}
      myTicketDatas={myTicketDatas}
      loadMore={loadMore}
      onPressHandler={onPressHandler}
    />
  );
};

export default MyTicket;
