import PrNoticeImportantList from "./Presenters/PrNoticeImportantList";
import { useNavigation } from "@react-navigation/native";

const NoticeImportantList = ({datas}) => {
  const navigation = useNavigation();
  return <PrNoticeImportantList datas={datas} navigation={navigation} />;
};

export default NoticeImportantList;
