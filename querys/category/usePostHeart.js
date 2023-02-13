import { useMutation } from "@tanstack/react-query";
import { multipartRequest, request } from "../../axios/axiosConfig";

const postContentHeart = (id) => {
  return request({
    method: "post",
    url: `/hearts/artizens/${id}`,
    // payload,
  });
};

const usePostHeart = () => {
  return useMutation({
    mutationFn: async (id) => {
      const response = await postContentHeart(id);
      return response?.data;
    },
    // suspense: true,
  });
};

export default usePostHeart;
