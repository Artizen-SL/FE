import PrMyPageMain from "./Presenters/PrMyPageMain";
import useFetchMyPage from "../../querys/mypage/useFetchMyPage";
import useFetchImportantNotice from "../../querys/notice/useFetchImportantNotice";
import { useNavigation } from "@react-navigation/native";


const MyPage = () => {
    const {data:myPageDatas} = useFetchMyPage();
    const {data:notice} = useFetchImportantNotice();
    const navigation = useNavigation();
  return <PrMyPageMain myPageDatas={myPageDatas} notice={notice} navigation={navigation}/>
}

export default MyPage;
