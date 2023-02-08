import { useQuery } from "@tanstack/react-query";
import { getRequest } from "../../axios/axiosConfig";

const getNoticeContent = () => {
    return getRequest({
      method: "get",
      url: `/notification`,
    });
  };

const useFetchNotice = () => {
    return useQuery(
        {
          queryKey: ["getNoticeContent"],
          queryFn: async () => {
            const { data } = await getSearchContent();
            return data;
          },
        },
        {
          enabled: false,
          retry: 1,
        }
      );
}

export default useFetchNotice
