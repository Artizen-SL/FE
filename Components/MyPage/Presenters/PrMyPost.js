import {
  StyleSheet,
  View,
  Text,
  Button,
  Image,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
  FlatList,
} from "react-native";
import styled, { css } from "styled-components/native";
import Theme from "../../../Theme/Theme";
import ScrollViewLayout from "../../Layout/ScrollViewLayout";
import { SafeAreaView } from "react-native-safe-area-context";
import Layout from "../../Layout/Layout";
import TagView from "../../Elem/TagView";
import PrMyPageWrapper from "./PrMyPageWrapper";

const PrMyPost = ({ myPostDatas, loadMore, onPressHandler }) => {
  const renderItem = ({ item }) => {
    return (
      <StCommuContentWrapper
        onPress={() =>
          navigation.navigate("CommunityRoutes", {
            screen: "CommunityDetail",
            params: {
              id: item?.id,
            },
          })
        }
      >
        <StCommuContentTitle>
          <TagView variant="community" tag={item?.tag ?? "자유글"}>
            {item?.tag ?? "자유글"}
          </TagView>
          <StTitleWrapper>
            <StTitle numberOfLines={1} ellipsizeMode="tail">
              {item?.title}
            </StTitle>
          </StTitleWrapper>
        </StCommuContentTitle>
        <View>
          <StSubText numberOfLines={1} ellipsizeMode="tail">
            {item?.content}
          </StSubText>
        </View>
        <RowBox>
          <StSubText numberOfLines={1} ellipsizeMode="tail">
            {item?.createdAt}{" "}
          </StSubText>
          <TouchableOpacity
          onPress={()=>{onPressHandler(item.communityId)}}
          >
            <IconImage source={require("../../../assets/Icon/trash.png")} />
          </TouchableOpacity>
        </RowBox>
      </StCommuContentWrapper>
    );
  };

  return (
    <PrMyPageWrapper
      title="내가 쓴 글"
      icon={require("../../../assets/mypage/Write.png")}
    >
      {myPostDatas && myPostDatas.length > 0 ? (
        <FlatList
          // ListHeaderComponent={<></>}
          renderItem={renderItem}
          data={myPostDatas}
          keyExtractor={(item) => item?.id}
          onEndReached={loadMore}
          onEndReachedThreshold={0.5}
          // contentContainerStyle={{}}
          // ListFooterComponent={}
        />
      ) : (
        <Layout>
          <Text>내가 쓴 글이 없어요</Text>
        </Layout>
      )}
    </PrMyPageWrapper>
  );
};

export default PrMyPost;

const StCommuContentWrapper = styled(TouchableOpacity)`
  display: flex;
  height: 70px;
  margin: 10px 10px;
  border-color: #ddd;
  border-bottom-width: 1px;
`;

const StCommuContentTitle = styled(View)`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const RowBox = styled(View)`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const StTitle = styled(Text)`
  margin-left: 10px;
  font-weight: bold;
`;

const StTitleWrapper = styled(View)`
  display: flex;
  flex-wrap: nowrap;
  width: 80%;
`;

const StSubText = styled(Text)`
  color: gray;
`;
const IconImage = styled(Image)`
  width: 15px;
  height: 15px;
`;
