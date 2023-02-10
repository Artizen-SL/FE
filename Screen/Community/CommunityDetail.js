import React from "react";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import CommunityComment from "../../Components/Community/Presenters/CommunityComment";
import CommunityContentsWrapper from "../../Components/Community/Presenters/CommunityContentsWrapper";
import CommunityPostingDetail from "../../Components/Community/Presenters/CommunityPostingDetail";
import useFetchCommunityDetail from "../../querys/community/useFetchCommunityDetail";
import useFetchMyPage from "../../querys/mypage/useFetchMyPage";
import AsyncStorage from "@react-native-async-storage/async-storage";

const communityCommentList = [
  {
    id: 1,
    nickname: "nickname",
    profileImage:
      "http://image.dongascience.com/Photo/2020/03/5bddba7b6574b95d37b6079c199d7101.jpg",
    comment:
      "descriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescription",
    date: "2021/02/04",
  },
  {
    id: 2,
    nickname: "nickname",
    profileImage:
      "http://image.dongascience.com/Photo/2020/03/5bddba7b6574b95d37b6079c199d7101.jpg",
    comment:
      "descriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescription",
    date: "2021/02/04",
  },
  {
    id: 3,
    nickname: "nickname",
    profileImage:
      "http://image.dongascience.com/Photo/2020/03/5bddba7b6574b95d37b6079c199d7101.jpg",
    comment:
      "descriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescription",
    date: "2021/02/04",
  },
  {
    id: 4,
    nickname: "nickname",
    profileImage:
      "http://image.dongascience.com/Photo/2020/03/5bddba7b6574b95d37b6079c199d7101.jpg",
    comment:
      "descriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescription",
    date: "2021/02/04",
  },
];

const CommunityDetail = ({ route }) => {
  // const navigation = useNavigation();
  const { id } = route.params;
  const {
    data: communityDetailData,
    isLoading,
    isError,
  } = useFetchCommunityDetail(id);
  console.log(communityDetailData);

  const renderItem = ({ item }) => {
    return <CommunityComment item={item} />;
  };

  return (
    <CommunityContentsWrapper title="Community">
      {
        <FlatList
          ListHeaderComponent={
            communityDetailData && (
              <CommunityPostingDetail data={communityDetailData} />
            )
          }
          renderItem={renderItem}
          // data={communityCommentList}
          keyExtractor={(item) => item?.id}
          // contentContainerStyle={{}}
          // ListFooterComponent={}
        />
      }
    </CommunityContentsWrapper>
  );
};

export default CommunityDetail;
