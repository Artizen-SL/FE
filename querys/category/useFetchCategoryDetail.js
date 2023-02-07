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

export default useCategoryDetail;