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
import ScrollViewLayout from "../../Layout/ScrollViewLayout";
import Theme from "../../../Theme/Theme";
import Layout from "../../Layout/Layout";

const RecommendSearchWord = ({
  datas,
  setSendKeyword,
  sendKeyword,
}) => {
  return (
    <ScrollViewLayout>
      <View style={styles.container}>
        <View style={styles.rowLeft}>
          <Text style={styles.skyBoldText}>아티즌</Text>
          <Text style={styles.blackBoldText}>의 추천 검색어</Text>
        </View>
        <Layout>
          <TextArea>
            {datas.map((data) => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    setSendKeyword({
                      ...sendKeyword,
                      keyword: data?.name,
                    });
                  }}
                >
                  <RecSearchText>{data?.name}</RecSearchText>
                </TouchableOpacity>
              );
            })}
          </TextArea>
        </Layout>
      </View>
    </ScrollViewLayout>
  );
};

export default RecommendSearchWord;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  center: {
    alignItems: "center",
    justifyContent: "center",
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

const RecSearchText = styled(Text)`
  color: ${Theme.colors.DarkGray};
  font-size: 12px;
  text-decoration: underline;
  margin: 5px;
`;
const Line = styled(View)`
  width: 312px;
  border: 0.5px solid ${Theme.colors.LightGray};
  align-items: center;
  justify-content: center;
  margin-bottom: 16;
`;
const BgImage = styled(ImageBackground)`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
const TextArea = styled(View)`
  flex-wrap: wrap;
  width: 300px;
  flex-direction: row;
  white-space: pre-wrap;
  word-wrap: normal;
  word-break: normal;
`;
