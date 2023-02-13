import React, { useState } from "react";
import useFetchSearch from "../../querys/search/useFetchSearch";
import PrMyTicketPost from "./Presenters/PrMyTicketPost";
import { Alert } from "react-native";
import usePostMyPageTicket from "../../querys/mypage/usePostMyPageTicket";
import { useNavigation } from "@react-navigation/native";
const MyTicketPost = () => {
  const navigation = useNavigation();

  const [myTicketInputs, setMyTicketInputs] = useState({
    artizenId: "",
    imageUrl: "",
    star: 5,
    review: "",
    searchText: "",
    contentName: "",
  });

  //search Btn
  const [submitSearchText, setSubmitSearchText] = useState(undefined);
  const { data: searchDatas } = useFetchSearch(submitSearchText);
  const { mutate: myPageTicketMutate } = usePostMyPageTicket();

  // 검색 버튼 누를 시
  const onSearchSubmit = () => {
    if (myTicketInputs.searchText === "") {
      return setSubmitSearchText(undefined);
    }
    setSubmitSearchText(myTicketInputs.searchText);
  };

  // 등록하기 버튼
  const onSubmitRecord = () => {
    if (
      myTicketInputs.artizenId === "" ||
      myTicketInputs.imageUrl === "" ||
      myTicketInputs.star === "" ||
      myTicketInputs.review === ""
    ) {
      return Alert.alert("오류", "모두 채워주세요", [
        {
          text: "나가기",
          style: "cancel",
        },
      ]);
    }

    Alert.alert("확인", "정말 입력하시겠습니까?", [
      {
        text: "나가기",
        style: "cancel",
      },
      {
        text: "작성",
        onPress: () => {
          const frm = new FormData();
          frm.append("artizenId", myTicketInputs.artizenId);
          frm.append("star", myTicketInputs.star);
          frm.append("ticketImg", myTicketInputs.imageUrl);
          frm.append("review", myTicketInputs.review);
          myPageTicketMutate(
            { payload: frm },
            {
              onSuccess: (data) => {
                navigation.navigate("MyPageRoutes", {
                  screen: "MyTicket",
                });
              },
              onError: (error) => {},
            }
          );
        },
      },
    ]);
  };

  return (
    <PrMyTicketPost
      myTicketInputs={myTicketInputs}
      setMyTicketInputs={setMyTicketInputs}
      searchDatas={searchDatas}
      onSearchSubmit={onSearchSubmit}
      onSubmitRecord={onSubmitRecord}
    />
  );
};

export default MyTicketPost;
