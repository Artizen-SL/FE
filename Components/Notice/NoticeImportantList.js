import NoticeListImportantData from "./Data/NoticeListImportantData"
import PrNoticeImportantList from "./Presenters/PrNoticeImportantList";

const NoticeImportantList = () => {
    const datas = NoticeListImportantData();
  return <PrNoticeImportantList datas={datas}/>;
}

export default NoticeImportantList
