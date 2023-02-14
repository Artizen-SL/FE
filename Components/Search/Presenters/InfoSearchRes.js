import {
  StyleSheet,
  View,
  Text,
  FlatList,
  Button,
  Image,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
} from "react-native";
import styled, { css } from "styled-components/native";
import Theme from "../../../Theme/Theme";
import ScrollViewLayout from "../../Layout/ScrollViewLayout";
import InfoSearchContentView from "./InfoSearchContentView";
import { SafeAreaView } from "react-native-safe-area-context";
import Layout from "../../Layout/Layout";

const InfoSearchRes = ({ loadMore,navigation, searchWord, sendKeyword, searchData }) => {
  const renderItem = ({item}) =>{
    return(
      <TouchableOpacity
      style={styles.StContentWrapper}
      activeOpacity={0.9}
      onPress={() =>
        navigation.navigate("ContentDetail", {
          screen: "ContentDetail",
          id: item?.id,
          category: item?.category,
        })
      }
    >
      <View>
        <View style={styles.StImgWrapper}>
          {item.posterUrl ? (
            <Image source={{ uri: item?.posterUrl }} style={styles.StImg} />
          ) : (
            <Image
              source={require("../../../assets/login/logo_v1_3.png")}
              style={styles.StEmptyImg}
              resizeMode="contain"
            />
          )}
        </View>
        <View style={styles.StTextWrapper}>
          <Text style={styles.StNameText}>{item?.name}</Text>
          <Text style={styles.StText}>기간 : {item?.date}</Text>
          <Text style={styles.StText}>장소 : {item?.facility}</Text>
        </View>
      </View>
    </TouchableOpacity>
    )
  }
  
  return (
    <MarginLeft>
      <LowLeft>
        <Image source={require("../../../assets/Icon/SearchBL.png")} />
        <SearchWord>"{sendKeyword.keyword}"</SearchWord>
        <BlackBoldText>검색결과 입니다.</BlackBoldText>
      </LowLeft>
      <View style={{ flex: 1 }}>
      <ScrollViewLayout>
        {searchData &&
          <FlatList
          // ListHeaderComponent={<></>}
          renderItem={renderItem}
          numColumns={1}
          data={searchData}
          keyExtractor={(item) => item?.id}
          onEndReached={loadMore}
          onEndReachedThreshold={0.5}
          // contentContainerStyle={{}}
          // ListFooterComponent={}
        />
       }
      </ScrollViewLayout>
    </View>
    </MarginLeft>
  );
};

export default InfoSearchRes;

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

const SearchWord = styled(Text)`
  color: ${Theme.colors.Pink};
  font-weight: bold;
  font-size: 15px;
`;

const BlackBoldText = styled(Text)`
  color: ${Theme.colors.Black};
  font-weight: bold;
  font-size: 15px;
`;

const GrayText = styled(Text)`
  color: ${Theme.colors.DarkGray};
  font-size: 13px;
`;

const LinkText = styled(Text)`
  color: ${Theme.colors.SkyBlue};
  font-size: 13px;
  text-decoration: underline;
`;

const LowLeft = styled(View)`
  flex-direction: row;
  justify-content: flex-start;
  width: 100%;
`;

const MarginLeft = styled(View)`
  margin-left: 15px;
`;

const StyledText = styled.Text`
  /* text-shadow-color: rgba(0, 0, 0, 0.25);
  text-shadow-offset: 0px 4px;
  text-shadow-radius: 3px;*/
  text-shadow: 0px 4px 3px rgba(0, 0, 0, 0.25);
`;