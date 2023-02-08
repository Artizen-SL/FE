import NoticeListData from "./Data/NoticeListImportantData"
import PrNoticeList from "./Presenters/PrNoticeList";
import useFetchNotice from "../../querys/notice/useFetchNotice";

const NoticeList = () => {
    const datas = NoticeListData();
    const {
      data: noticeData,
      isError,
      isLoading,
    } = useFetchNotice();
    console.log(" noticeData==>", noticeData)
  return<PrNoticeList datas={datas}/>
}

export default NoticeList
