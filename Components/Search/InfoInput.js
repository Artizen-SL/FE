import { useNavigation } from "@react-navigation/native";
import InfoSearchInput from "./Presenters/InfoSearchInput"

const InfoInput = () => {
    const navigation = useNavigation();
  return <InfoSearchInput navigation={navigation}/>;
}

export default InfoInput
