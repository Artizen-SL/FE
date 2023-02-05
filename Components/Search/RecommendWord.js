import InfoSearchInput from "./Presenters/InfoSearchInput";
import RecommendSearch from "./Data/RecommendSearch";
import RecommendSearchWord from "./Presenters/RecommendSearchWord";
import { useNavigation } from "@react-navigation/native";


const RecommendSearchWord = () => {
    const datas = RecommendSearch();
    const navigation =  useNavigation();
  return <RecommendSearchWord datas={datas} navigation={navigation}/>;
};

export default RecommendSearchWord;


