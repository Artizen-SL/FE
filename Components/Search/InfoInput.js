import { useNavigation } from "@react-navigation/native";
import { useState, useEffect } from "react";
import InfoSearchInput from "./Presenters/InfoSearchInput";
import { IOScrollView, InView } from "react-native-intersection-observer";
import ScrollViewLayout from "../Layout/ScrollViewLayout";
import Layout from "../Layout/Layout";
import SearchRes from "./SearchRes";
import useFetchSearch from "../../querys/search/useFetchSearch";
import InfoSearchNotAvailable from "../Search/Presenters/InfoSearchNotAvailable";
import RecommendWord from "./RecommendWord";
import { View } from "react-native";

const InfoInput = () => {
  const navigation = useNavigation();

  const [searchWord, setSearchWord] = useState();
  const [sendKeyword, setSendKeyword] = useState();

  const onChangeSearch = (keyvalue, e) => {
    setSearchWord({
      ...searchWord,
      [keyvalue]: e,
    });
  };

  const {
    data: searchData,
    isError,
    isLoading,
  } = useFetchSearch(sendKeyword?.keyword);

  const onPressSearch = () => {
    if (!searchWord.keyword.length > 0 && searchWord.keyword) {
      return searchWord;
    } else {
      setSendKeyword({ ...searchWord });
    }
  };

  return (
    <ScrollViewLayout>
      <InfoSearchInput
        navigation={navigation}
        searchWord={searchWord}
        onPressSearch={onPressSearch}
        onChangeSearch={onChangeSearch}
      />
      {searchData?.length > 0 && searchData ? (
        <ScrollViewLayout>
          <SearchRes
            navigation={navigation}
            searchWord={searchWord}
            sendKeyword={sendKeyword}
            searchData={searchData}
          />
        </ScrollViewLayout>
      ) : (
        <>
          {!sendKeyword?.keyword?.length > 0 && !sendKeyword?.keyword ? (
            <RecommendWord
              sendKeyword={sendKeyword}
              setSendKeyword={setSendKeyword}
            />
          ) : (
            <InfoSearchNotAvailable
              navigation={navigation}
              searchWord={searchWord}
              sendKeyword={sendKeyword}
              searchData={searchData}
            />
          )}
        </>
      )}
    </ScrollViewLayout>
  );
};

export default InfoInput;
