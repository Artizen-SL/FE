import { useQuery } from "@tanstack/react-query";
import { getRequest } from "../../axios/axiosConfig";

const getAdmin = (payload) => {
  return getRequest({
    method: "get",
    url: `/members/admin?adminToken=${payload}`,
  });
};

const useFetchAdmin = (payload) => {
  return useQuery(
    {
      queryKey: ["getAdmin"],
      queryFn: async () => {
        const response = await getAdmin(payload);
        return response ?? null;
      },
      onError: (error) => {
        console.log(error);
      },
      suspense: true,
    },
    {
      retry: 0,
      enabled: !!payload,
    }
  );
};

export default useFetchAdmin;
