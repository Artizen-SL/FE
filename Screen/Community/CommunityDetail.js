import React from "react";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import CommunityComment from "../../Components/Community/Presenters/CommunityComment";
import CommunityContentsWrapper from "../../Components/Community/Presenters/CommunityContentsWrapper";
import CommunityPostingDetail from "../../Components/Community/Presenters/CommunityPostingDetail";
import useFetchCommunityDetail from "../../querys/community/useFetchCommunityDetail";

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

const commuPostingDetaildata = {
  id: 33,
  nickname: "John",
  date: "2021/02/04",
  profileImage:
    "http://image.dongascience.com/Photo/2020/03/5bddba7b6574b95d37b6079c199d7101.jpg",
  description:
    "내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용",
  category: "자유글",
  title: "모네전 가봄?",
  postingImages: [
    "http://image.dongascience.com/Photo/2020/03/5bddba7b6574b95d37b6079c199d7101.jpg",
    "http://image.dongascience.com/Photo/2020/03/5bddba7b6574b95d37b6079c199d7101.jpg",
    "http://image.dongascience.com/Photo/2020/03/5bddba7b6574b95d37b6079c199d7101.jpg",
  ],
};

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
