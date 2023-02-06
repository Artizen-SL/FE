import React from "react";

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
} from "react-native";
import styled, { css } from "styled-components/native";
import Theme from "../../../Theme/Theme";
import ScrollViewLayout from "../../Layout/ScrollViewLayout";
import { SafeAreaView } from "react-native-safe-area-context";

const InfoSearchInput = ({
  navigation,
  onChangeSearch,
  searchWord,
  onPressSearch,
}) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollViewLayout>
        <View style={styles.container}>
          <View style={styles.rowCenter}>
            <TextInput
              style={styles.input}
              value={searchWord}
              name="search"
              onChangeText={(e) => onChangeSearch("keyword", e)}
              onSubmitEditing={onPressSearch}
              placeholder="전시, 장소, 공연, 출연진, 작품검색"
              returnKeyType="search"
            />
            <TouchableOpacity
            onPress={()=>{onPressSearch()}}
            >
              <Image
                source={require("../../../assets/Icon/Search-bg-ver.png")}
              />
            </TouchableOpacity>
          </View>
          <Line />
        </View>
      </ScrollViewLayout>
    </SafeAreaView>
  );
};

export default InfoSearchInput;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  smallRound: {
    width: 50,
    height: 50,
  },
  center: {
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    flex: 1,
  },
  bgImage: { width: "100%", height: "100%" },
  logo: { width: 117, height: 32 },
  longBox: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    width: 312,
    height: 34,
    backgroundColor: "#fff",
    borderRadius: 5,
    marginTop: 22,
  },
  smallText: {
    fontSize: 12,
    marginLeft: 5,
  },
  skyblueText: {
    color: Theme.colors.SkyBlue,
    fontSize: 12,
    borderBottomColor: Theme.colors.SkyBlue,
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginLeft: 5,
  },
  blackBoldText: {
    color: Theme.colors.Black,
    fontSize: 15,
    fontWeight: "bold",
  },
  skyBoldText: {
    color: Theme.colors.SkyBlue,
    fontSize: 15,
    fontWeight: "bold",
  },
  whiteBackground: {
    width: "100%",
    height: 363,
  },
  headerarea: {
    flex: 1,
    height: 45,
    width: 340,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    margin: 7,
  },
  input: {
    width: 254,
    height: 40,
    marginTop: 15,
    marginBottom: 15,
    marginRight: 9,
    borderWidth: 1,
    borderColor: Theme.colors.SkyBlue,
    borderRadius: 5,
    padding: 10,
  },
  rowCenter: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  rowLeft: {
    flexDirection: "row",
    justifyContent: "flex-start",
    width: "100%",
    marginLeft: "20%",
  },
  row: {
    flexDirection: "row",
  },
});

const StView = styled.View`
  /* background-color: pink; */
`;

const SmallRound = styled.View`
  width: 50px;
  height: 50px;
  border: 1px solid ${Theme.colors.LightGray};
`;

const LogoView = styled.View`
  flex: 6;
  align-items: center;
  justify-content: center;
`;

const LongBox = styled.View`
  flex: row;
  width: 312px;
  height: 34px;
  background-color: white;
  border-radius: 5px;
`;
const RecSearchText = styled.Text`
  color: ${Theme.colors.DarkGray};
  font-size: 12px;
  text-decoration: underline;
  margin: 5px;
`;
const Line = styled.View`
  width: 312px;
  border: 0.5px solid ${Theme.colors.LightGray};
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
`;
const BgImage = styled(ImageBackground)`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
const TextArea = styled.View`
  flex-wrap: wrap;
  width: 300px;
  flex-direction: row;
  white-space: pre-wrap;
  word-wrap: normal;
  word-break: normal;
`;
