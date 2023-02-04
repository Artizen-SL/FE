import InfoSearchInput from "./Presenters/InfoSearchInput";
import RecommendSearch from "./Data/RecommendSearch";
import RecommendSearchWord from "./Presenters/RecommendSearchWord";
import { useNavigate } from "react-router-dom";

const RecommendSearchWord = () => {
    const datas = RecommendSearch();
    const navigate =  useNavigate();
  return <RecommendSearchWord datas={datas} navigate={navigate}/>;
};

export default RecommendSearchWord;


