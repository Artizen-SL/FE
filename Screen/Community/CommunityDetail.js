import React from "react";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import CommunityComment from "../../Components/Community/Presenters/CommunityComment";
import CommunityContentsWrapper from "../../Components/Community/Presenters/CommunityContentsWrapper";
import CommunityPostingDetail from "../../Components/Community/Presenters/CommunityPostingDetail";
import useFetchCommunityDetail from "../../querys/community/useFetchCommunityDetail";

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
