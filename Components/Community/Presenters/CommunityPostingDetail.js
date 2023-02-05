import React from "react";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import styled from "styled-components";
import TagView from "../../Elem/TagView";

const CommunityPostingDetail = ({
  data: {
    category,
    date,
    description,
    profileImage,
    id,
    nickname,
    title,
    postingImages,
  },
}) => {
  return (
    <StPostingDetailContainer>
      <StPostingHeader>
        <StPostingUserImage source={{ uri: profileImage }} />
        <View>
          <StNicknameText>{nickname}</StNicknameText>
          <StDateText>{date}</StDateText>
        </View>
      </StPostingHeader>

      <StTitleView>
        <TagView variant="community" tag="자유글">
          {category}
        </TagView>
        <StTitleText>{title}</StTitleText>
      </StTitleView>

      <Text>{description}</Text>

      {postingImages.map((item, idx) => {
        return (
          <>
            {/* <View styles={{ width: 100, height: 100 }}> */}
            <StPostingImage
              key={idx}
              source={{ uri: item }}
              resizeMode="contain"
            />
            {/* </View> */}
          </>
        );
      })}
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

const StPostingImage = styled(Image)`
  width: 100%;
  height: 500px;
`;
