import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { getRequest } from "../../axios/axiosConfig";

const getMyTicket = (pageParam, size) => {
  return getRequest({
    method: "get",
    url: `/members/ticket/list?page=${pageParam}&size=${size}`,
  });
};

const useFetchMyTicket = () => {
  return useInfiniteQuery({
    queryKey: ["getMyTicket"],
    queryFn: async ({ pageParam = 1 }) => {
      const { data } = await getMyTicket(pageParam, 10);
      const { mypageList: page, isLast } = data;
      return { page, nextPage: pageParam + 1, isLast };
    },
    getNextPageParam: (lastPage) => {
      return !lastPage.isLast ? lastPage.nextPage : undefined;
    },
  });
};

export default useFetchMyTicket;
