import { useNavigation } from "@react-navigation/native";
import React from "react";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import CommunityContentsWrapper from "../../Components/Community/Presenters/CommunityContentsWrapper";

const communityCommentList = [
  {
    id: 1,
    nickname: "nickname",
    profileImage:
      "http://image.dongascience.com/Photo/2020/03/5bddba7b6574b95d37b6079c199d7101.jpg",
    comment: "description",
    date: "2021/02/04",
  },
  {
    id: 2,
    nickname: "nickname",
    profileImage:
      "http://image.dongascience.com/Photo/2020/03/5bddba7b6574b95d37b6079c199d7101.jpg",
    comment: "description",
    date: "2021/02/04",
  },
  {
    id: 3,
    nickname: "nickname",
    profileImage:
      "http://image.dongascience.com/Photo/2020/03/5bddba7b6574b95d37b6079c199d7101.jpg",
    comment: "description",
    date: "2021/02/04",
  },
  {
    id: 4,
    nickname: "nickname",
    profileImage:
      "http://image.dongascience.com/Photo/2020/03/5bddba7b6574b95d37b6079c199d7101.jpg",
    comment: "description",
    date: "2021/02/04",
  },
];

const CommunityDetail = ({ route }) => {
  // const navigation = useNavigation();
  // const { commuContentId } = route.params;

  const renderItem = ({ item }) => {
    return (
      <>
        <View>
          <View>
            <View>
              <Image source={{ uri: item.profileImage }} />
            </View>
            <Text>{item.nickname}</Text>
            <TouchableOpacity>
              <Text>삭제</Text>
            </TouchableOpacity>
          </View>
          <Text>{item.comment}</Text>
          <Text>{item.date}</Text>
        </View>
      </>
    );
  };

  return (
    <CommunityContentsWrapper title="Community">
      {
        <FlatList
          ListHeaderComponent={<></>}
          renderItem={renderItem}
          data={communityCommentList}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{}}
          // ListFooterComponent={}
        />
      }
    </CommunityContentsWrapper>
    // <TouchableOpacity
    //   onPress={() =>
    //     navigation.navigate("CommunityRoutes", {
    //       screen: "CommunityPost",
    //     })
    //   }
    // >
    //   <Text>CommnunityDetail</Text>
    // </TouchableOpacity>
  );
};

export default CommunityDetail;
