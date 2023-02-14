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
const PrMyLike = ({ mylikeDatas, loadMore, navigation }) => {
  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        style={styles.StContentWrapper}
        activeOpacity={0.9}
        onPress={() =>
          navigation.navigate("MainRoutes", {
            screen: "ContentDetail",
            params: { id: item.id, category: "" },
          })
        }
      >
        <View>
          <View style={styles.StImgWrapper}>
            {item.posterUrl ? (
              <Image source={{ uri: item.posterUrl }} style={styles.StImg} />
            ) : (
              <Image
                source={require("../../../assets/login/logo_v1_3.png")}
                style={styles.StEmptyImg}
                resizeMode="contain"
              />
            )}
          </View>
          <View style={styles.StTextWrapper}>
            <Text style={styles.StNameText}>{item.name}</Text>
            <Text style={styles.StText}>기간 : {item.date}</Text>
            <Text style={styles.StText}>장소 : {item.place}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <PrMyPageWrapper
      title="좋아요"
      icon={require("../../../assets/mypage/Like.png")}
    >
      {mylikeDatas && mylikeDatas.length > 0 ? (
        <FlatList
          // ListHeaderComponent={<></>}
          renderItem={renderItem}
          data={mylikeDatas}
          keyExtractor={(item) => item?.id}
          onEndReached={loadMore}
          onEndReachedThreshold={0.5}
          // contentContainerStyle={{}}
          // ListFooterComponent={}
        />
      ) : (
        <Layout>
          <Text>좋아요한 게시물이 없습니다.</Text>
        </Layout>
      )}
    </PrMyPageWrapper>
  );
};

export default PrMyLike;

const styles = StyleSheet.create({
  StContentWrapper: {
    borderRadius: 20,
    backgroundColor: "#fff",
    height: Dimensions.get("window").height / 2,
    marginBottom: 20,
    padding: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  StImgWrapper: {
    borderRadius: 20,
    height: "70%",
    width: "100%",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.85,
    shadowRadius: 3.84,
    elevation: 5,
  },
  StImg: {
    borderRadius: 20,
    width: "100%",
    height: "100%",
  },
  StEmptyImg: {
    borderRadius: 20,
    width: "100%",
    height: "100%",
    backgroundColor: "gray",
  },
  StTextWrapper: {
    width: "100%",
    height: "30%",
    justifyContent: "space-around",
    paddingBottom: 10,
    paddingTop: 10,
    // borderWidth: 1,
    // borderStyle: "solid",
  },

  StNameText: {
    fontSize: 15,
    fontWeight: "bold",
  },
  StText: {
    fontSize: 13,
    color: Theme.colors.Gray,
  },
});
