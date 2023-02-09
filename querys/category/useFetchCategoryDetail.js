import { useQuery } from "@tanstack/react-query";
import { getRequest } from "../../axios/axiosConfig";

const getCategoryDetail = (genre) => {
  return getRequest({
    method: "get",
    url: `/artizens?genre=${genre}`,
  });
};

const useCategoryDetail = (genre) => {
  return useQuery({
    queryKey: ["getCategoryDetail", genre],
    queryFn: async () => {
      const { data } = await getCategoryDetail(genre);
      return data;
    },
  });
};

// const getCategoryDetail = (genre, pageParam) => {
//   return getRequest({
//     method: "get",
//     url: `/artizens?genre=${genre}&page=${pageParam}&size=${2}`,
//   });
// };

// const getCategoryDetail = (genre, pageParam) => {
//   return getRequest({
//     method: "get",
//     url: `/artizens?genre=${genre}&page=${pageParam}&size=${2}`,
//   });
// };

// const useCategoryDetail = (genre, pageParam) => {
//   return useQuery({
//     queryKey: ["getCategoryDetail", genre, pageParam],
//     queryFn: ({ pageParam = 1 }) => fetchPage(pageParam),
//     getNextPageParam: (lastPage, allPages) => lastPage.nextCursor,
//     getPreviousPageParam: (firstPage, allPages) => firstPage.prevCursor,
//   });
// };

export default useCategoryDetail;
