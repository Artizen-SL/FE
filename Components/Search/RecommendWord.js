import RecommendSearchData from "./querys/RecommendSearchData";
import RecommendSearchWord from "./Presenters/RecommendSearchWord";
import { useFetchSearch } from "../../querys/search/useFetchSearch";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";

const RecommendWord = ({ sendKeyword, setSendKeyword }) => {
  const datas = RecommendSearchData();
  return (
    <RecommendSearchWord
      datas={datas}
      sendKeyword={sendKeyword}
      setSendKeyword={setSendKeyword}
    />
  );
};

export default RecommendWord;
