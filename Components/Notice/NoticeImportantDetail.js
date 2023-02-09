import PrNoticeIMPDetail from "./Presenters/PrNoticeIMPDetail";
import useFetchIMPNoticeDetail from "../../querys/notice/useFetchIMPNoticeDetail";
import useFetchNoticeDetail from "../../querys/notice/useFetchNoticeDetail";


const NoticeImportantDetail = ({route}) => {
  const {id} = route.params;
  const { data, isError, isLoading } = useFetchNoticeDetail(id);
  console.log("NoticeImportantDetail",data);
  return <PrNoticeIMPDetail data={data}/>
}

export default NoticeImportantDetail
