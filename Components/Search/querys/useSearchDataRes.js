import { getRequest } from "../../../axios/axiosConfig";
import { useInfiniteQuery } from "@tanstack/react-query";

const fetchSearchList = ({ keyword, prams }) => {
  return getRequest({
    method: "get",
    url: `/search/artizens?keyword=${keyword}`,
    prams,
  });
};

const useSearchDataRes = ({ keyword }) => {
  console.log("keyword===>", keyword);
  return useInfiniteQuery(
    ["getSearchList", keyword],
    async ({ pagePram = 1 }) => {
      const {
        data: { getResDto: list, lastPage: isLast },
        error,
        fetchNextPage,
        hasNextPage,
        isFetching,
        isFetchingNextPage,
        status,
      } = await fetchSearchList({
        keyword,
        params: { page: pagePram, size: 2 },
      });

      return {
        list,
        isLast,
        nextPage: pagePram + 1,
        error,
        fetchNextPage,
        hasNextPage,
        isFetching,
        isFetchingNextPage,
        status,
      };
    },
    {
      enabled: false,
      getNextPageParam: (lastPage) => {
        return !lastPage.isLast ? lastPage.nextPage : undefined;
      },
    }
  );

  const datas = [
    {
      id: 1,
      name: "뮤지컬<앨리스>",
      posterUrl:
        "http://tkfile.yes24.com/upload2/PerfBlog/202212/20221227/20221227-44525.jpg",
    },
    {
      id: 2,
      name: "반도네온 탱고",
      posterUrl:
        "http://tkfile.yes24.com/upload2/PerfBlog/202212/20221222/20221222-44516.jpg",
    },
    {
      id: 3,
      name: "하리보 골드베렌",
      posterUrl:
        "http://tkfile.yes24.com/upload2/PerfBlog/202209/20220922/20220922-43362.jpg",
    },
    {
      id: 4,
      name: "Another Nice Day ",
      posterUrl:
        "http://tkfile.yes24.com/upload2/PerfBlog/202301/20230112/20230112-44650.jpg",
    },
    {
      id: 5,
      name: "아기돼지삼형제 ",
      posterUrl:
        "http://tkfile.yes24.com/upload2/PerfBlog/202301/20230112/20230112-44650.jpg",
    },
  ];
  return datas;
};

export default useSearchDataRes;
