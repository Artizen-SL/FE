import { useNavigation } from "@react-navigation/native";
import { useState, useEffect } from "react";
import InfoSearchInput from "./Presenters/InfoSearchInput";
import { IOScrollView, InView } from "react-native-intersection-observer";
import { useSearchDataRes } from "./querys/useSearchDataRes";
import SearchRes from "./SearchRes";
import useFetchSearch from "../../querys/search/useFetchSearch";

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
  // const { error, fetchNextPage, hasNextPage, isFetching, isFetchingNextPage } =
  //   useSearchDataRes();

  const {
    data: searchData,
    isError,
    isLoading,
  } = useFetchSearch(sendKeyword?.keyword);

  const onPressSearch = () => {
    console.log("searchWord==>", searchWord);
    //파람으로 검색어 보내기(쿼리)
    //데이터로 서치검색페이지 네비게이트
    // useSearchDataRes(searchWord);
    setSendKeyword({ ...searchWord });
  };

  console.log("searchData", searchData);
  //  useEffect(() => {
  //   if (InView) fetchNextPage();
  // }, [InView, fetchNextPage]);

  return (
    <>
      <InfoSearchInput
        navigation={navigation}
        searchWord={searchWord}
        onPressSearch={onPressSearch}
        onChangeSearch={onChangeSearch}
      />
      <SearchRes />
    </>
  );
};

export default InfoInput;
