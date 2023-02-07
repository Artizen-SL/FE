import { useQuery } from "@tanstack/react-query";
import { getRequest } from "../../axios/axiosConfig";

const getSearchContent = (keyword) => {
  return getRequest({
    method: "get",
    url: `/search/artizens?keyword=${keyword}`,
  });
};

const useFetchSearch = (keyword) => {
  return useQuery(
    {
      queryKey: ["getSearchContent", keyword],
      queryFn: async () => {
        const response = await getSearchContent(keyword);
        return response.data;
      },
    },
    {
      enabled: false,
      retry: 1,
    }
  );
};

export default useFetchSearch;
