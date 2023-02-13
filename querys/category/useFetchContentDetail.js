import { useQuery } from "@tanstack/react-query";
import { getRequest } from "../../axios/axiosConfig";

const getContentDetail = (id) => {
  return getRequest({
    method: "get",
    url: `/artizens/${id}`,
  });
};

const useFetchContentDetail = (id) => {
  return useQuery({
    queryKey: ["getContentDetail", id],
    queryFn: async () => {
      const response = await getContentDetail(id);
      return response.data;
    },
  });
};

export default useFetchContentDetail;
