import { useMutation } from "@tanstack/react-query";
import { multipartRequest } from "../../axios/axiosConfig";

const postMyPageTicket = (payload) => {
  return multipartRequest({
    method: "post",
    url: `/members/ticket/write`,
    payload,
  });
};

const usePostMyPageTicket = () => {
  return useMutation({
    mutationFn: async ({ payload }) => {
      const response = await postMyPageTicket(payload);
      return response?.data;
    },
    // suspense: true,
  });
};

export default usePostMyPageTicket;
