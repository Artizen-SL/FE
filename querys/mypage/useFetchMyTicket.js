import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { getRequest } from "../../axios/axiosConfig";

const getMyTicket = (pageParam, size) => {
    return getRequest({
      method: "get",
      url: `/members/ticket/list?page=${pageParam}&size=${size}`,
    });
  };

const useFetchMyTicket = (pageParam, size) => {
    return useInfiniteQuery({
        queryKey: ["getMyTicket"],
        queryFn: async () => {
          const { data } = await getMyTicket(pageParam, size);
          return data;
        },
        getNextPageParam: (lastPage) => {
          console.log(lastPage);
          console.log("lastPage", lastPage.isLast);
          let nextPage = pageParam + 1;
          return lastPage.isLast ? undefined : lastPage.nextPage;
        },
      });
}

export default useFetchMyTicket
