import { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import InfoSearchRes from "./Presenters/InfoSearchRes";
import InfoSearchNotAvailable from "./Presenters/InfoSearchNotAvailable";

const SearchRes = ({ navigation, loadMore, searchWord, sendKeyword, searchData,setSearchWord, }) => {
  return (
    <InfoSearchRes
      navigation={navigation}
      searchWord={searchWord}
      sendKeyword={sendKeyword}
      searchData={searchData}
      setSearchWord={setSearchWord}
      loadMore={loadMore}
    />
  );
};

export default SearchRes;
