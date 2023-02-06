import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import InfoSearchInput from "./Presenters/InfoSearchInput";
// import { useInView } from "react-intersection-observer";

import SearchRes from "./SearchRes";

const InfoInput = () => {
  const navigation = useNavigation();

  
  const [searchWord,setSearchWord] = useState();
  const onChangeSearch = (keyvalue,e) =>{
        setSearchWord({
      ...searchWord,
      [keyvalue]: e
    })
  };

  // const { ref, inView } = useInView();
  // const { data, status, fetchNextPage, isFetchingNextPage } = useInfiniteQuery(
	// 	["NoticeList"],
	// 	({ pageParam = 1 }) => fetchPostList(pageParam),
	// 	{
	// 		getNextPageParam: lastPage =>
	// 			!lastPage.isLast ? lastPage.nextPage : undefined,
	// 	},
	// );
  // useEffect(() => {
	// 	if (inView) fetchNextPage();
	// }, [inView]);

 const onPressSearch = () => {
console.log("searchWord==>",searchWord)
//파람으로 검색어 보내기(쿼리)
//데이터로 서치검색페이지 네비게이트
 }
  return <InfoSearchInput 
  navigation={navigation} 
  searchWord={searchWord}
  onPressSearch={onPressSearch}
  onChangeSearch={onChangeSearch}/>;
};

export default InfoInput;
