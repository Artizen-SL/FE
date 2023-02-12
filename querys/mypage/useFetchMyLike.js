import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { getRequest } from "../../axios/axiosConfig";

const getMyLike = (pageParam, size) => {
    return getRequest({
      method: "get",
      url: `/members/hearts?page=${pageParam}&size=${size}`,
    });
  };

const useFetchMyLike = (pageParam, size) => {
    return useInfiniteQuery({
        queryKey: ["getMyLike"],
        queryFn: async () => {
          const { data } = await getMyLike(pageParam, size);
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

export default useFetchMyLike;
