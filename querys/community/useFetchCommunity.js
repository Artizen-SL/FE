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
      const res = await getCommunity(pageParam, size);
      return res.data;
    },
    getNextPageParam: (lastPage, pages) => {
      // console.log(lastPage);
      // console.log("pages", pages.flat());

      return lastPage.length / size + 1;
    },

    // getNextPageParam: (lastPage, page) => {
    //   console.log("lastPage", lastPage);
    //   console.log("lastPage.page", lastPage.page);
    //   const nextPage = lastPage?.page + 1;
    //   return nextPage > lastPage?.total_pages ? null : nextPage;
    // },
  });
};

// const useFetchCommunity = () => {
//   return useQuery({
//     queryKey: ["getCommunity"],
//     queryFn: async () => {
//       const { data } = await getCommunity();
//       return data;
//     },
//   });
// };

export default useFetchCommunity;
