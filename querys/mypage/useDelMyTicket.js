import { useMutation } from "@tanstack/react-query";
import { request } from "../../axios/axiosConfig";

const delMyTicket = (payload) => {
    return request({
      method: "delete",
      url: `/members/ticket/${payload}`,
    });
  };

const useDelMyTicket = () => {
    return useMutation({
        mutationFn: async (payload) => {
          const response = await delMyTicket(payload);
          return response?.data;
        },
        suspense: true,
      });
}

export default useDelMyTicket;
