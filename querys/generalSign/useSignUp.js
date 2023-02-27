import { useMutation } from "@tanstack/react-query";
import { request } from "../../axios/axiosConfig";

const postSignUp = (payload) => {
  return request({
    method: "post",
    // url: `/`,
    payload,
  });
};

const useSignUp = () => {
  return useMutation({
    mutationFn: async ({ payload }) => {
      const response = await postSignUp(payload);
      return response?.data;
    },
    // suspense: true,
  });
};

export default useSignUp;
