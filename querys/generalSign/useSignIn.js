import { useMutation } from "@tanstack/react-query";
import { request } from "../../axios/axiosConfig";

const postSignIn = (payload) => {
  return request({
    method: "post",
    url: `/`,
    payload,
  });
};

const useSignIn = () => {
  return useMutation({
    mutationFn: async ({ payload }) => {
      const response = await postSignIn(payload);
      return response?.data;
    },
    // suspense: true,
  });
};

export default useSignIn;
