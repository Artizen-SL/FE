import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import styled from "styled-components";

const CommunityComment = ({ item }) => {
  return (
    <StCommentContainer>
      <View>
        <StCommentHeader>
          <StCommentUser>
            <StCommentUserImage source={{ uri: item.profileImage }} />
            <StNicknameText>{item.nickname}</StNicknameText>
          </StCommentUser>

          <TouchableOpacity style={{}}>
            <StDeleteText>삭제</StDeleteText>
          </TouchableOpacity>
        </StCommentHeader>
      </View>
      <Text style={{ marginTop: 5, marginBottom: 5 }}>{item.comment}</Text>
      <StDateText>{item.date}</StDateText>
    </StCommentContainer>
  );
};

export default CommunityComment;

const StCommentContainer = styled(View)`
  margin: 10px;
  padding-bottom: 5px;
  border-color: #ddd;
  border-bottom-width: 1px;
`;

const StCommentHeader = styled(View)`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
const StCommentUser = styled(View)`
  flex-direction: row;
  align-items: center;
  margin-top: 5px;
  margin-bottom: 5px;
`;

const StCommentUserImage = styled(Image)`
  height: 50px;
  width: 50px;
  border-radius: 10px;
  margin-right: 5px;
`;

const StNicknameText = styled(Text)`
  font-weight: bold;
`;
const StDeleteText = styled(Text)`
  font-weight: bold;
  color: #48b7e2;
`;

const StDateText = styled(Text)`
  color: gray;
  font-size: 12px;
`;
