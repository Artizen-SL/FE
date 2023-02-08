
import { useQuery } from "@tanstack/react-query";
import { getRequest } from "../../axios/axiosConfig";


const getImportantNoticeContent = () => {
    return getRequest({
      method: "get",
      url: `/notification/importance`,
    });
  };

const useFetchImportantNotice = () => {
    return useQuery(
        {
          queryKey: ["getImportantNoticeContent"],
          queryFn: async () => {
            const { data } = await getImportantNoticeContent();
            return data;
          },
        },
        {
          enabled: false,
          retry: 1,
        }
      );
}

export default useFetchImportantNotice;