import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { getRequest } from "../../axios/axiosConfig";

const getMyLike = (pageParam, size) => {
  return getRequest({
    method: "get",
    url: `/members/hearts?page=${pageParam}&size=${size}`,
  });
};

const useFetchMyLike = ( ) => {
  return useInfiniteQuery({
    queryKey: ["getMyLike"],
    queryFn: async ({ pageParam = 1 }) => {
      const { data } = await getMyLike(pageParam, 10);
      const { mypageList: page, isLast } = data;
      return { page, nextPage: pageParam + 1, isLast };
    },
    getNextPageParam: (lastPage) => {
      return !lastPage.isLast ? lastPage.nextPage : undefined;
    },
  });
};

export default useFetchMyLike;
