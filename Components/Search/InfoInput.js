import { useNavigation } from "@react-navigation/native";
import { useState, useEffect } from "react";
import InfoSearchInput from "./Presenters/InfoSearchInput";
import { IOScrollView, InView } from "react-native-intersection-observer";
import { useSearchDataRes } from "./querys/useSearchDataRes";
import SearchRes from "./SearchRes";

const InfoInput = () => {
  const navigation = useNavigation();

  const [searchWord, setSearchWord] = useState();
  const onChangeSearch = (keyvalue, e) => {
    setSearchWord({
      ...searchWord,
      [keyvalue]: e,
    });
  };
  // const { error, fetchNextPage, hasNextPage, isFetching, isFetchingNextPage } =
  //   useSearchDataRes();

    console.log()
  const onPressSearch = () => {
    console.log("searchWord==>", searchWord);
    //파람으로 검색어 보내기(쿼리)
    //데이터로 서치검색페이지 네비게이트
    // useSearchDataRes(searchWord);
  };

  //  useEffect(() => {
  //   if (InView) fetchNextPage();
  // }, [InView, fetchNextPage]);

  return (
    <InfoSearchInput
      navigation={navigation}
      searchWord={searchWord}
      onPressSearch={onPressSearch}
      onChangeSearch={onChangeSearch}
    />
  );
};

export default InfoInput;
