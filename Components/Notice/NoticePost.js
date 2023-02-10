import { useNavigation } from "@react-navigation/native";
import PrNoticePost from "./Presenters/PrNoticePost";
import { useState, useEffect } from "react";
import usePostNotice from "../../querys/notice/usePostNotice";
import { Alert } from "react-native";
const NoticePost = () => {
  const navigation = useNavigation();
  const [important, setImportant] = useState(false);
  const init = {
    title: "",
    content: "",
    imageUrl: "",
    importance: "0",
  };
  const [notice, setNotice] = useState(init);

  const onChangeHandler = (name, e) => {
    setNotice({ ...notice, [name]: e });
  };

  const { mutate: postNoticeMutate } = usePostNotice();

  const onSubmitHandler = () => {
    if (
      notice.title === "" ||
      notice.content === "" ||
      notice.imageUrl === ""
    ) {
      return Alert.alert("오류", "빈칸을 채워주세요", [
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
          frm.append("title", notice.title);
          frm.append("content", notice.content);
          frm.append("imageUrl", notice.imageUrl);
          frm.append("importance", notice.importance);
          postNoticeMutate(
            { payload: frm },
            {
              onSuccess: (data) => {
                console.log("data", data);
                navigation.navigate("NoticeRoutes", {
                  screen: "Notice",
                });
              },
              onError: (error) => {
                console.log(error);
              },
            }
          );
        },
      },
    ]);
  };

  return (
    <PrNoticePost
      setImportant={setImportant}
      important={important}
      notice={notice}
      setNotice={setNotice}
      onSubmitHandler={onSubmitHandler}
      onChangeHandler={onChangeHandler}
    />
  );
};

export default NoticePost;
