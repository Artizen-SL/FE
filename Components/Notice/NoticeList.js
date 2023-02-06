import NoticeListData from "./Data/NoticeListData"
import PrNoticeList from "./Presenters/PrNoticeList";

const NoticeList = () => {
    const datas = NoticeListData();
  return<PrNoticeList datas={datas}/>
}

export default NoticeList
