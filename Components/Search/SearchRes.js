import { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import useSearchDataRes from "./Data/useSearchDataRes"
import InfoSearchRes from "./Presenters/InfoSearchRes";

const SearchRes = () => {
    const datas = useSearchDataRes();
    const navigation = useNavigation();
    useEffect(()=>{
      if(datas.length > 0 && datas !== undefined){
        navigation.navigate("SearchRoutes", {
          screen: "InfoSearchNotAvailable",
        })
      }
    },[datas]); 
  return <InfoSearchRes datas={datas}/>;
}

export default SearchRes
