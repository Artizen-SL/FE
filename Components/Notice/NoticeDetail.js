import { Alert } from "react-native";
import { useState } from "react";
import PrNoticeDetail from "./Presenters/PrNoticeDetail";
import useFetchNoticeDetail from "../../querys/notice/useFetchNoticeDetail";
import useDelNotice from "../../querys/notice/useDelNotice";

const NoticeDetail = ({ route }) => {
  const { id } = route.params;
  const { data, isError, isLoading } = useFetchNoticeDetail(id);
  
  //공지삭제
  const [delNotice, setDelNotice] = useState(false);
  const [delPassword, setDelPassword] = useState("");

  const onDelChange = () => {
    setDelNotice(!delNotice);
  };

  const onChangePassword = (e) => {
    setDelPassword((prev) => (prev = e));
    console.log(e);
  };

  const { mutate: delNoticeMutate } = useDelNotice();

  const onPressHandler = (id) => {
    if (delPassword === "1111") {
      Alert.alert("확인", "정말 삭제하시겠습니까?", [
        {
          text: "취소",
          style: "cancel",
        },
        {
          text: "OK",
          onPress: () => {
            delNoticeMutate(id, {
              onSuccess: (data, variable, context) => {
                Alert.alert("삭제완료");
              },
              onError: (error, variable, context) => {
                Alert.alert("삭제실패");
              },
            });
          },
        },
      ]);
    } else if (delPassword !== "1111") {
      Alert.alert("비밀번호가 일치하지않습니다.");
    }
  };

  return (
    <PrNoticeDetail
      id={id}
      delNotice={delNotice}
      delPassword={delPassword}
      setDelNotice={setDelNotice}
      onPressHandler={onPressHandler}
      onDelChange={onDelChange}
      onChangePassword={onChangePassword}
      data={data}
    />
  );
};

export default NoticeDetail;
