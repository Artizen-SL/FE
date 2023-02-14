import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { getRequest } from "../../axios/axiosConfig";

const getMyPost = (pageParam, size) => {
  return getRequest({
    method: "get",
    url: `/members/community?page=${pageParam}&size=${size}`,
  });
};

const useFetchMyPost = () => {
  return useInfiniteQuery({
    queryKey: ["getMyPost"],
    queryFn: async ({ pageParam = 1 }) => {
      const { data } = await getMyPost(pageParam, 10);
      const { mypageList: page, isLast } = data;
      return { page, nextPage: pageParam + 1, isLast };
    },
    getNextPageParam: (lastPage) => {
      return !lastPage.isLast ? lastPage.nextPage : undefined;
    },
  });
};

export default useFetchMyPost;
