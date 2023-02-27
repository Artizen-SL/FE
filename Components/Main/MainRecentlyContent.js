import { View } from "react-native";
import RecentlyPost from "./Presenters/RecentlyPost";
import useFetchNewArtizen from "../../querys/Main/useFetchNewArtizen";

const MainRecentlyContent = () => {
  const { data: datas } = useFetchNewArtizen();

  return <RecentlyPost datas={datas} />;
};

export default MainRecentlyContent;
