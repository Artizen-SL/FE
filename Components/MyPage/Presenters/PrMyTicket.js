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
import PrMyPageWrapper from "./PrMyPageWrapper";

const PrMyTicket = ({ navigation, myTicketDatas, loadMore,onPressHandler }) => {
  const renderItem = ({ item }) => {
    console.log(item);
    return (
      <>
        {item && item.cultureName ? (
          <Box>
            <ImageBox source={{ uri: item.ticketImg }}>
              <BtnIcon
              onPress={()=>{
                onPressHandler(item.myTicketId)
              }}
              >
                <IconImage source={require("../../../assets/Icon/trash.png")} />
              </BtnIcon>
            </ImageBox>
            <Center>
              <Text numberOfLines={2} ellipsizeMode="tail">
                {item.cultureName}
              </Text>
              <GrayText>{item.date}</GrayText>
              <GrayText numberOfLines={1} ellipsizeMode="tail">
                {item.place}
              </GrayText>
            </Center>
          </Box>
        ) : (
          <Layout>
            <Text>마이티켓을 등록해보세요!</Text>
          </Layout>
        )}
      </>
    );
  };
  return (
    <SafeAreaView>
      <Layout>
        <RowView>
          <RowBox>
            <StTicketImg
              source={require("../../../assets/mypage/Tickets.png")}
            />
            <Text>마이티켓 목록</Text>
          </RowBox>

          <PostBtn
            onPress={() => {
              navigation.navigate("MyPageRoutes", {
                screen: "MyTicketPost",
              });
            }}
          >
            <WhiteText>기록하기</WhiteText>
          </PostBtn>
        </RowView>

        {myTicketDatas && myTicketDatas.length > 0 ? (
          <FlatList
            // ListHeaderComponent={<></>}
            renderItem={renderItem}
            numColumns={2}
            data={myTicketDatas}
            keyExtractor={(item) => item?.id}
            onEndReached={loadMore}
            onEndReachedThreshold={0.5}
            // contentContainerStyle={{}}
            // ListFooterComponent={}
          />
        ) : (
          <Layout>
            <Text>마이티켓을 등록해보세요!</Text>
          </Layout>
        )}
      </Layout>
    </SafeAreaView>
  );
};

export default PrMyTicket;

const Box = styled(View)`
  width: 50%;
  height: 230px;
  background-color: ${Theme.colors.White};
  border-radius: 5px;
  border: 1px solid ${Theme.colors.LightGray};
  margin: 0 2px 5px 2px;
`;

const ImageBox = styled(ImageBackground)`
  width: 100%;
  height: 139px;
  background-color: ${Theme.colors.LightGray};
  border-radius: 5px;
`;

const IconImage = styled(Image)`
  width: 20px;
  height: 20px;
  /* margin: 5px 0 0 5px; */
`;

const RowBox = styled(View)`
  flex-direction: row;
  align-items: center;
`;

const BtnIcon = styled(TouchableOpacity)`
  margin: 10px 0 0 10px;
`;
const Center = styled(View)`
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 10px auto;
`;

const RowView = styled(View)`
  flex-direction: row;
  justify-content: space-between;
  justify-items: center;
  align-items: center;
  margin-bottom: 10px;
`;

const StTicketImg = styled(Image)`
  width: 30px;
  height: 30px;
  margin-right: 7px;
`;

const PostBtn = styled(TouchableOpacity)`
  width: 60px;
  height: 30px;
  border-radius: 5px;
  background-color: ${Theme.colors.SkyBlue};
  align-items: center;
  justify-content: center;
`;

const WhiteText = styled(Text)`
  color: ${Theme.colors.White};
  font-size: 12px;
`;

const GrayText = styled(Text)`
  color: ${Theme.colors.LightGray};
  font-size: 10px;
`;
