import BestPost from "./Presenters/BestPost";
import useFetchBestArtizen from "../../querys/Main/useFetchBestArtizen";

const MainBestContent = () => {
  const {data:datas} = useFetchBestArtizen();    
  return <BestPost datas={datas}/>;
}

export default MainBestContent;
