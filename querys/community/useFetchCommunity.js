import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { getRequest } from "../../axios/axiosConfig";

export const getCommunity = (pageParam, size) => {
  return getRequest({
    method: "get",
    url: `/community?page=${pageParam}&size=${size}`,
  });
};

// const useFetchCommunity = (pageParam, size) => {
//   return useInfiniteQuery({
//     queryKey: ["getCommunity"],
//     queryFn: async () => {
//       const { data } = await getCommunity(pageParam, size);
//       return data;
//     },
//     getNextPageParam: (lastPage, page) => {
//       const nextPage = pageParam + 1;
//       return lastPage.isLast ? null : nextPage;
//     },
//   });
// };

// export default useFetchCommunity;
