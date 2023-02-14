import { useQuery } from "@tanstack/react-query";
import { getRequest } from "../../axios/axiosConfig";

const getLocationContent = (gpsRes) => {
  console.log("gpsRes", gpsRes);
  return getRequest({
    method: "get",
    url: `/suggest?latitude=${gpsRes.latitude}&longitude=${gpsRes.longitude}`,
  });
};

const useFetchLocation = (gpsRes) => {
  console.log(gpsRes);
  return useQuery(
    {
      queryKey: [" getLocationContent", gpsRes],
      queryFn: async () => {
        console.log("gpsRes", gpsRes);
        const { data } = await getLocationContent(gpsRes);
        return data;
      },
      suspense: true,
    },
    {
      enabled: false,
      retry: 1,
    }
  );
};

export default useFetchLocation;
