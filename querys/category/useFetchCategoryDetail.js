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

      const { artizenList: page, isLast } = data;

      return { page, nextPage: pageParam + 1, isLast };
    },

    getNextPageParam: (lastPage) => {
      return !lastPage.isLast ? lastPage.nextPage : undefined;
    },
  });
};

export default useCategoryDetail;
