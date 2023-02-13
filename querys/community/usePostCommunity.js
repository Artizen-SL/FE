import { useMutation } from "@tanstack/react-query";
import { multipartRequest, request } from "../../axios/axiosConfig";

const postCommunityMain = (payload) => {
  return multipartRequest({
    method: "post",
    url: `/community`,
    payload,
  });
};

const usePostCommunity = () => {
  return useMutation({
    mutationFn: async ({ payload }) => {
      const response = await postCommunityMain(payload);
      return response?.data;
    },
    // suspense: true,
  });
};

export default usePostCommunity;
