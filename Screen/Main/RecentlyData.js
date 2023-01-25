import { View } from "react-native";
import RecentlyPost from "./RecentlyPost";

const RecentlyData = ({ route }) => {
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
  ];
  return <RecentlyPost datas={datas} />;
};

export default RecentlyData;
