import { useQuery } from "@tanstack/react-query";
import { getRequest } from "../../axios/axiosConfig";

const getIMPNoticeDetail = (id) => {
  return getRequest({
    method: "get",
    url: `/notification/importance/${id}`,
  });
};

const useFetchIMPNoticeDetail = (id) => {
  return useQuery({
    queryKey: ["getIMPNoticeDetail", id],
    queryFn: async () => {
      const response = await getIMPNoticeDetail (id);
      return response.data;
    },
    suspense: true, 
  });
}

export default useFetchIMPNoticeDetail
