import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { getRequest } from "../../axios/axiosConfig";

const getCommunity = (pageParam, size) => {
  return getRequest({
    method: "get",
    url: `/community?page=${pageParam}&size=${size}`,
  });
};

const useFetchCommunity = (pageParam, size) => {
  return useInfiniteQuery({
    queryKey: ["getCommunity"],
    queryFn: async () => {
      const { data } = await getCommunity(pageParam, size);
      return data;
    },
    getNextPageParam: (lastPage, page) => {
      console.log("lastPage", lastPage);
      console.log("lastPage.page", lastPage.isLast);
      const nextPage = pageParam + 1;
      console.log(nextPage);
      return lastPage.isLast ? null : nextPage;
    },
  });
};

export default useFetchCommunity;
