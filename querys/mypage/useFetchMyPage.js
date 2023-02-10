import { useQuery } from "@tanstack/react-query";
import { getRequest } from "../../axios/axiosConfig";

const getMyPage = () => {
  return getRequest({
    method: "get",
    url: `/members/mypage`,
  });
};
const useFetchMyPage = () => {
  return useQuery({
    queryKey: ["getMyPage"],
    queryFn: async () => {
      const response = await getMyPage();
      return response?.data;
    },
  });
};

export default useFetchMyPage;
