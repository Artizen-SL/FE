import { useQuery } from "@tanstack/react-query";
import { getRequest } from "../../axios/axiosConfig";


const getNoticeDetail = (id) => {
    return getRequest({
      method: "get",
      url: `/notification/${id}`,
    });
  };

const useFetchNoticeDetail = (id) => {
    return useQuery({
        queryKey: ["getNoticeDetail", id],
        queryFn: async () => {
          const response = await getNoticeDetail(id);
          return response.data;
        },
        suspense: true, 
      });
}

export default useFetchNoticeDetail
