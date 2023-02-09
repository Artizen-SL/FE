import NoticeListData from "./Data/NoticeListImportantData"
import PrNoticeList from "./Presenters/PrNoticeList";
import useFetchNotice from "../../querys/notice/useFetchNotice";
import { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";

const NoticeList = () => {
    const {
      data:datas,
      isError,
      isLoading,
    } = useFetchNotice();
    const navigation = useNavigation();
  return<PrNoticeList datas={datas} navigation={navigation}/>
}

export default NoticeList
