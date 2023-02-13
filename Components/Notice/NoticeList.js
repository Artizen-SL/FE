import PrNoticeList from "./Presenters/PrNoticeList";
import { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";

const NoticeList = ({datas}) => {
    const navigation = useNavigation();
  return<PrNoticeList datas={datas} navigation={navigation}/>
}

export default NoticeList
