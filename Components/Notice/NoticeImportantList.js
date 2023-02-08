import NoticeListImportantData from "./Data/NoticeListImportantData"
import PrNoticeImportantList from "./Presenters/PrNoticeImportantList";
import useFetchImportantNotice from "../../querys/notice/useFetchImportantNotice";


const NoticeImportantList = () => {
  const {
    data:datas,
    isError,
    isLoading,
  } = useFetchImportantNotice();
  return <PrNoticeImportantList datas={datas}/>;
}

export default NoticeImportantList
