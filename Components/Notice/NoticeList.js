import NoticeListData from "./Data/NoticeListImportantData"
import PrNoticeList from "./Presenters/PrNoticeList";
import useFetchNotice from "../../querys/notice/useFetchNotice";
import { useEffect } from "react";

const NoticeList = () => {
    const {
      data:datas,
      isError,
      isLoading,
    } = useFetchNotice();
  return<PrNoticeList datas={datas}/>
}

export default NoticeList
