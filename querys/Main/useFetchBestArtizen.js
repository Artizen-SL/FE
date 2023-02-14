import { useQuery } from "@tanstack/react-query";
import { getRequest } from "../../axios/axiosConfig";


const getBestContent = () => {
    return getRequest({
      method: "get",
      url: `/best`,
    });
  };


const useFetchBestArtizen = () => {
    return useQuery(
        {
          queryKey: ["getBestContent"],
          queryFn: async () => {
            const { data } = await getBestContent();
            return data;
          },
          suspense: true 
        },
        {
          enabled: false,
          retry: 1,
        }
      );
}

export default useFetchBestArtizen;
