import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { getRequest } from "../../axios/axiosConfig";

const getMyPost = (pageParam, size) => {
  return getRequest({
    method: "get",
    url: `/members/community?page=${pageParam}&size=${size}`,
  });
};

const useFetchMyPost = (pageParam, size) => {
  return useInfiniteQuery({
    queryKey: ["getMyPost"],
    queryFn: async () => {
      const { data } = await getMyPost(pageParam, size);
      return data;
    },
    getNextPageParam: (lastPage) => {
      let nextPage = pageParam + 1;
      return lastPage.isLast ? undefined : lastPage.nextPage;
    },
  });
};

export default useFetchMyPost;
