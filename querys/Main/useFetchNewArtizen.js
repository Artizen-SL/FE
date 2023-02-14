import { useQuery } from "@tanstack/react-query";
import { getRequest } from "../../axios/axiosConfig";


const getNewContent = () => {
    return getRequest({
      method: "get",
      url: `/new`,
    });
  };
  
  const useFetchNewArtizen = () => {
    return useQuery(
        {
          queryKey: ["getNewContent"],
          queryFn: async () => {
            const { data } = await getNewContent();
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
  
  export default useFetchNewArtizen;
  