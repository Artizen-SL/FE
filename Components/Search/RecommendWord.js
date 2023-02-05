import RecommendSearchData from "./Data/RecommendSearchData";
import RecommendSearchWord from "./Presenters/RecommendSearchWord";
import { useNavigation } from "@react-navigation/native";


const RecommendWord = () => {
    const datas = RecommendSearchData();
    const navigation =  useNavigation();
  return <RecommendSearchWord datas={datas} navigation={navigation}/>;
};

export default RecommendWord;


