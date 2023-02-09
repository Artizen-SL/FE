import { Image, View, Text } from "react-native";
import PrNoticeDetail from "./Presenters/PrNoticeDetail";
import useFetchNoticeDetail from "../../querys/notice/useFetchNoticeDetail";

const NoticeDetail = ({route}) => {
  const { id } = route.params;
  const { data, isError, isLoading } = useFetchNoticeDetail(id);

  return <PrNoticeDetail data={data} id={id}/>;
};

export default NoticeDetail;
