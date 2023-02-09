import { useQuery } from "@tanstack/react-query";
import { getRequest } from "../../axios/axiosConfig";

const getCommunity = () => {
  return getRequest({
    method: "get",
    url: `/community`,
  });
};

const useFetchCommunity = () => {
  return useQuery({
    queryKey: ["getCommunity"],
    queryFn: async () => {
      const { data } = await getCommunity();
      return data;
    },
  });
};
export default useFetchCommunity;
