import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { getRequest } from "../../axios/axiosConfig";

const getCategoryDetail = (genre, pageParam, size) => {
  return getRequest({
    method: "get",
    url: `/artizens?genre=${genre}&page=${pageParam}&size=${size}`,
  });
};

const useCategoryDetail = (genre, pageParam, size) => {
  return useInfiniteQuery({
    queryKey: ["getCategoryDetail", genre],
    queryFn: async () => {
      const { data } = await getCategoryDetail(genre, pageParam, size);
      return data;
    },

    getNextPageParam: (lastPage) => {
      console.log(lastPage);
      console.log("lastPage", lastPage);
      let nextPage = pageParam + 1;
      console.log("nextPage", nextPage);
      return lastPage.isLast ? undefined : nextPage;
    },
  });
};

export default useCategoryDetail;
