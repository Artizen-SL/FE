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

    getNextPageParam: (lastPage) => {
      console.log(lastPage);
      console.log("lastPage", lastPage.isLast);
      let nextPage = pageParam + 1;
      console.log("nextPage", nextPage);
      return lastPage.isLast ? undefined : nextPage;
    },

    // getNextPageParam: (lastPage, page) => {
    //   console.log("lastPage", lastPage);
    //   console.log("lastPage.page", lastPage.page);
    //   const nextPage = lastPage?.page + 1;
    //   return nextPage > lastPage?.total_pages ? null : nextPage;
    // },
  });
};

export default useFetchCommunity;
