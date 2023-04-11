import { useNavigation } from "@react-navigation/native";
import PrMainNotice from "./Presenters/PrMainNotice";

const MainNotice = ({ datas }) => {
  const navigation = useNavigation();
  return <PrMainNotice datas={datas} navigation={navigation} />;
};

export default MainNotice;
