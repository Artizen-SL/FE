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

const PrMyTicket = ({ navigation, myTicketDatas, loadMore }) => {
  const renderItem = ({ item }) => {
    console.log(" item ", item);
    return (
      <Box>
        <ImageBox />
        <Text>{item.cultureName}</Text>
      </Box>
    );
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Wrapper>
        <View>
          <IconImage source={require("../../../assets/mypage/Tickets.png")} />
          <Text>마이티켓 목록</Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("MyPageRoutes", {
              screen: "MyTicketPost",
            });
          }}
        >
          <Text>글쓰기</Text>
        </TouchableOpacity>
      </Wrapper>
      <Layout>
     
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
            <Text>내가 쓴 글이 없어요</Text>
          )}
    
      </Layout>
    </SafeAreaView>
  );
};

export default PrMyTicket;

const Box = styled(View)`
  width: 50%;
  height: 217px;
  background-color: ${Theme.colors.White};
  border-radius: 5px;
  border: 1px solid ${Theme.colors.LightGray};
`;

const ImageBox = styled(View)`
  width: 100%;
  height: 139px;
  background-color: ${Theme.colors.SkyBlue};
  border-radius: 5px;
`;

const IconImage = styled(Image)`
  width: 30px;
  height: 30px;
`;

const Wrapper = styled(View)`
`;
