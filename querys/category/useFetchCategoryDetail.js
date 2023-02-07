import { useQuery } from "@tanstack/react-query";
import { getRequest } from "../../axios/axiosconfig";

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
      const response = await getCategoryDetail(genre);
      return response.data;
    },
  });
};

export default useCategoryDetail;