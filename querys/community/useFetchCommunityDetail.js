import { useQuery } from "@tanstack/react-query";
import { getRequest } from "../../axios/axiosConfig";

const getCommunityDetail = (id) => {
  return getRequest({
    method: "get",
    url: `/community/${id}`,
  });
};

const useFetchCommunityDetail = (id) => {
  return useQuery({
    queryKey: ["getCommunityDetail", id],
    queryFn: async () => {
      const response = await getCommunityDetail(id);
      return response?.data;
    },
  });
};
export default useFetchCommunityDetail;
