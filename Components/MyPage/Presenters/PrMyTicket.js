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
    console.log( " item ",item )
    return (
      <Box>
        <ImageBox source={{ uri: item.ticketImg}} />
        <Text>{item.cultureName}</Text>
      </Box>
    );
  };
  return (
    <ScrollViewLayout style={{ flex: 1 }}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("MyPageRoutes", {
            screen: "MyTicketPost",
          });
        }}
      >
        <Text>글쓰기</Text>
      </TouchableOpacity>
      {/* {myTicketDatas && myTicketDatas.length > 0 ? ( */}
        <FlatList
          // ListHeaderComponent={<></>}
          renderItem={renderItem}
          data={myTicketDatas}
          keyExtractor={(item) => item?.id}
          onEndReached={loadMore}
          onEndReachedThreshold={0.5}
          // contentContainerStyle={{}}
          // ListFooterComponent={}
        />
      {/* ) : (
        <Layout>
          <Text>내가 쓴 글이 없어요</Text>
        </Layout>
      )} */}
    </ScrollViewLayout>
  );
};

export default PrMyTicket;

const Box = styled(View)`
  width: 40%;
  height: 217px;
  background-color: ${Theme.colors.White};
  border-radius: 5px;
  border: 1px solid ${Theme.colors.LightGray};
`;

const ImageBox = styled(Image)`
  width: 40%;
  height: 139px;
`;
