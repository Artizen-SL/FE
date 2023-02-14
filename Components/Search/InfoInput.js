import { useIsFocused,useNavigation } from "@react-navigation/native";
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
  const isFocused = useIsFocused();

  const [searchWord, setSearchWord] = useState();
  const [sendKeyword, setSendKeyword] = useState();

  const onChangeSearch = (keyvalue, e) => {
    setSearchWord({
      ...searchWord,
      [keyvalue]: e,
    });
  };

  const {
    data,
    isLoading,
    isError,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
    refetch,
    remove,
  } = useFetchSearch(sendKeyword?.keyword);

  const searchData = data?.pages?.flatMap((item) => {
    return item?.page?.flat();
  });

  useEffect(() => {
    remove();
      refetch({
        refetchPage: (page, index) => {
          index === 0;
        },
      });
  }, [isFocused]);

  const loadMore = () => {
    if (hasNextPage) {
      fetchNextPage();
    }
  };  

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
            loadMore={loadMore}
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
