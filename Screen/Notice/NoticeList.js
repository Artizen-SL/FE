import ScrollViewLayout from "../../Components/Layout/ScrollViewLayout";
import { useNavigation } from "@react-navigation/native";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
  RCTImageView,
} from "react-native";
import Theme from "../../Theme/Theme";
import styled, { css } from "styled-components/native";
import NoticeData from "./NoticeData";

const NoticeList = () => {
  const datas = NoticeData();
  return (
    <ScrollViewLayout>
      <View style={styles.headerarea}>
        <Image
          source={require("../../assets/login/logo_v1_3.png")}
          style={styles.logo}
        />
      </View>
    </ScrollViewLayout>
  );
};

export default NoticeList;

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
  BlBoldText: {
    color: Theme.colors.Black,
    fontSize: 14,
    fontWeight: "bold",
    width: 114,
    borderBottomColor: Theme.colors.Black,
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginLeft: 10,
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
const UserGps = styled.Text`
  color: ${Theme.colors.SkyBlue};
  font-weight: 700;
`;
