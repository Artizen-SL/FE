import { View, Text, ScrollView, Image, TouchableOpacity,Alert } from "react-native";
import { AsyncStorage } from "react-native";
import styled, { css } from "styled-components/native";
import Theme from "../../../Theme/Theme";

const PrMyPageMain = ({ myPageDatas, notice, navigation }) => {
  console.log("PrMyPageMain", myPageDatas);
  return (
    <ScrollView>
      <BgImage source={require("../../../assets/mypage/bg.png")}>
        <ProfileImgWrap>
          <TouchableOpacity>
            <ProfileImage source={{ uri: myPageDatas?.profileImg }} />
          </TouchableOpacity>
          <UserName>{myPageDatas?.nickname}</UserName>
        </ProfileImgWrap>
        <BoxWrap
          style={{
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,
          }}
        >
            
          <Box>
          <TouchableOpacity
          onPress={()=>{
            navigation.navigate("MyPageRoutes", {
                screen: "MyTicket",
              })
          }}
          >
            <IconImage source={require("../../../assets/mypage/Tickets.png")} />
            <Text>마이티켓</Text>
            </TouchableOpacity>
          </Box>

          <Box>
          <TouchableOpacity
          onPress={()=>{
            navigation.navigate("MyPageRoutes", {
                screen: "MyLike",
              })
          }}
          >
            <IconImage source={require("../../../assets/mypage/Like.png")} />
            <Text>좋아요</Text>
          </TouchableOpacity>
            
          </Box>

          <Box>
          <TouchableOpacity
          onPress={()=>{
            navigation.navigate("MyPageRoutes", {
                screen: "MyPost",
              })
          }}
          >
            <IconImage source={require("../../../assets/mypage/Write.png")} />
            <Text>내가 쓴 글</Text>
            </TouchableOpacity>
          </Box>

          <Box>
            <IconImage source={require("../../../assets/mypage/Message.png")} />
            <Text>채팅 목록</Text>
          </Box>
        </BoxWrap>

        <View>
          <ListBox
            style={{
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,
              elevation: 5,
            }}
          >
            <IconImage source={require("../../../assets/mypage/Tickets.png")} />
            <StText>마이티켓</StText>
          </ListBox>

          <ListBox
            style={{
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,
              elevation: 5,
            }}
          >
            <IconImage source={require("../../../assets/mypage/Like.png")} />
            <StText>좋아요</StText>
          </ListBox>

          <ListBox
            style={{
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,
              elevation: 5,
            }}
          >
            <IconImage source={require("../../../assets/mypage/Write.png")} />
            <StText>내가 쓴 글</StText>
          </ListBox>

          <ListBox
            style={{
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,
              elevation: 5,
            }}
          >
            <IconImage source={require("../../../assets/mypage/Message.png")} />
            <StText>채팅 목록</StText>
          </ListBox>
        </View>

        {notice?.map((data) => {
          return (
            <NoticeBox>
              <NoticeTitle>공지</NoticeTitle>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("NoticeRoutes", {
                    screen: "NoticeDetail",
                    params: { id: data?.id },
                  })
                }
              >
                <Text>{data.title}</Text>
              </TouchableOpacity>
            </NoticeBox>
          );
        })}
      </BgImage>
    </ScrollView>
  );
};

export default PrMyPageMain;

const BgImage = styled.ImageBackground`
  width: 100%;
  height: 100%;
`;

const IconImage = styled(Image)`
  width: 30px;
  height: 30px;
`;

const ProfileImage = styled(Image)`
  width: 90px;
  height: 90px;
  border-radius: 45px;
  border: 3px solid ${Theme.colors.SkyBlue};
`;

const ProfileImgWrap = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 150px;
  margin: auto;
  margin-top: 30px;
`;

const UserName = styled.Text`
  font-size: 20px;
`;

const BoxWrap = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 331px;
  height: 110px;
  background: #fffefe;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 17px;
  margin: 10px auto;
`;

const Box = styled.TouchableOpacity`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 75px;
  height: 60px;
`;

const ListBox = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 331px;
  height: 60px;
  background: #fffefe;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 17px;
  margin: 15px auto;
  padding-left: 28px;
`;

const StText = styled.Text`
  margin-left: 20px;
  font-size: 16px;
`;

const NoticeBox = styled.TouchableOpacity`
  width: 331px;
  height: 50px;
  display: flex;
  flex-direction: row;
  align-items: center;
  border: 1px solid #d9d9d9;
  margin: 5px auto;
  padding-left: 24px;
  border-radius: 17px;
`;

const NoticeTitle = styled.Text`
  color: #48b7e2;
  font-weight: bold;
  margin-right: 10px;
`;
