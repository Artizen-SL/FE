import NoticeListImportantData from "./Data/NoticeListImportantData";
import PrNoticeImportantList from "./Presenters/PrNoticeImportantList";
import useFetchImportantNotice from "../../querys/notice/useFetchImportantNotice";
import { useNavigation } from "@react-navigation/native";

const NoticeImportantList = () => {
  const navigation = useNavigation();
  const { data: datas, isError, isLoading } = useFetchImportantNotice();
  return <PrNoticeImportantList datas={datas} navigation={navigation} />;
};

export default NoticeImportantList;
