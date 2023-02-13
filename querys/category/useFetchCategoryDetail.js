import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { getRequest } from "../../axios/axiosConfig";

const getCategoryDetail = (genre, pageParam, size) => {
  return getRequest({
    method: "get",
    url: `/artizens?genre=${genre}&page=${pageParam}&size=${size}`,
  });
};

const useCategoryDetail = (genre, size) => {
  return useInfiniteQuery({
    queryKey: ["getCategoryDetail"],
    queryFn: async ({ pageParam = 0 }) => {
      const { data } = await getCategoryDetail(genre, pageParam, size);

      // const { pages: page, isLast } = data;

      return data;
    },

    getNextPageParam: (lastPage) => {
      // return lastPage.isLast ? undefined : nextPage;
    },
  });
};

export default useCategoryDetail;
