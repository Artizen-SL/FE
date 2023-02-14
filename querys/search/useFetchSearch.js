import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { getRequest } from "../../axios/axiosConfig";

const getSearchContent = (keyword, pageParam, size) => {
  return getRequest({
    method: "get",
    url: `/search/artizens?keyword=${keyword}&page=${pageParam}&size=${size}`,
  });
};

const useFetchSearch = (keyword, pageParam, size) => {
  return useInfiniteQuery(
    {
      queryKey: ["getSearchContent", keyword],
      queryFn: async () => {
        const { data } = await getSearchContent(keyword, pageParam, size);
        const { artizenList: page, isLast } = data;
        return { page, nextPage: pageParam + 1, isLast };
      },
      getNextPageParam: (lastPage) => {
        return lastPage.isLast ? undefined : lastPage.nextPage;
      },
      suspense: true,
    },
    {
      enabled: false,
      retry: 1,
    }
  );
};

export default useFetchSearch;
