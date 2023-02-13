import { useMutation } from "@tanstack/react-query";
import { multipartRequest, request } from "../../axios/axiosConfig";


const postNotice = (payload) => {
    return multipartRequest({
      method: "post",
      url: `/notification`,
      payload,
    });
};

const usePostNotice = () => {
    return useMutation({
        mutationFn: async ({ payload }) => {
          const response = await postNotice(payload);
          return response?.data;
        },
        suspense: true,
      });
}

export default usePostNotice;
