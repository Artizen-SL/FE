import React from "react";
import { Image, Text, View } from "react-native";
import styled from "styled-components";
import TagView from "../../Elem/TagView";

const CommunityPostingDetail = ({
  data: { content, createdAt, imageUrl, tag, id, title },
}) => {
  return (
    <StPostingDetailContainer>
      <StPostingHeader>
        <StPostingUserImage
          source={require("../../../assets/logo/artizenRabbit.png")}
        />
        <View>
          <StNicknameText>{"익명"}</StNicknameText>
          <StDateText>{createdAt.slice(0, 10)}</StDateText>
        </View>
      </StPostingHeader>

      <StTitleView>
        <TagView variant="community" tag={tag}>
          {tag}
        </TagView>
        <StTitleText>{title}</StTitleText>
      </StTitleView>

      <StContentText>{content}</StContentText>

      <View>
        <StPostingImage source={{ uri: imageUrl }} resizeMode="contain" />
      </View>

      {/* <LikeContainer>
        <StLikeImg
          source={require("../../../assets/Icon/Love.png")}
          resizeMode="contain"
        />
        <Text></Text>
      </LikeContainer> */}

      <StDividerView />
      {/* {postingImages.map((item, idx) => {
        return (
          <View key={idx}>
            <StPostingImage source={{ uri: item }} resizeMode="contain" />
          </View>
        );
      })} */}
    </StPostingDetailContainer>
  );
};

export default CommunityPostingDetail;

const StPostingDetailContainer = styled(View)`
  margin: 10px;
  padding-bottom: 5px;
  border-color: #ddd;
  border-bottom-width: 1px;
`;

const StPostingHeader = styled(View)`
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px;
  margin-top: 10px;
`;

const StPostingUserImage = styled(Image)`
  height: 50px;
  width: 50px;
  border-radius: 10px;
  margin-right: 5px;
`;

const StNicknameText = styled(Text)`
  font-weight: bold;
`;
const StDateText = styled(Text)`
  color: gray;
  font-size: 12px;
`;

const StTitleView = styled(View)`
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px;
`;

const StTitleText = styled(Text)`
  margin-left: 5px;
  font-weight: bold;
`;

const StContentText = styled(Text)`
  margin-bottom: 20px;
`;

const StPostingImage = styled(Image)`
  width: 100%;
  height: 500px;
`;
const StDividerView = styled(View)`
  border-color: gray;
  border-bottom-width: 1px;
  margin-bottom: 10px;
  margin-top: 5px;
`;

const LikeContainer = styled(View)`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  height: 30px;
  border-width: 1px;
  margin-top: 5px;
`;

const StLikeImg = styled(Image)`
  width: 25;
  height: 25;
`;
