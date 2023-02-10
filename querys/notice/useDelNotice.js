import { useMutation } from "@tanstack/react-query";
import { request } from "../../axios/axiosConfig";

const delNotice = (id) => {
    return request({
      method: "delete",
      url: `/notification/${id}`,
      payload,
    });
};

const useDelNotice = () => {
    return useMutation({
        mutationFn: async ({ payload }) => {
          const response = await delNotice(payload);
          return response?.data;
        },
        // suspense: true,
      });
}

export default useDelNotice
