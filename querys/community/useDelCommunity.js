import { useMutation } from "@tanstack/react-query";
import { request } from "../../axios/axiosConfig";

const delCommunity = (payload) => {
    return request({
      method: "delete",
      url: `/community/${payload}`
    });
};

const useDelCommunity = () => {
    return useMutation({
        mutationFn: async (payload) => {
            console.log("payload==>",payload);
          const response = await delCommunity(payload);
          return response?.data;
        },
        suspense: true,
      });
}

export default useDelCommunity;
