import { useNavigation } from "@react-navigation/native";
import useFetchImportantNotice from "../../querys/notice/useFetchImportantNotice"
import PrMainNotice from "./Presenters/PrMainNotice";

const MainNotice = ({datas}) => {
    const navigation = useNavigation();
  return <PrMainNotice datas={datas} navigation ={navigation} />
}

export default MainNotice
