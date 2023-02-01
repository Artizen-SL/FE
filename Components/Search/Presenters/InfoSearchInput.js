import {
  StyleSheet,
  View,
  Text,
  Button,
  Image,
  Input,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
} from "react-native";
import styled, { css } from "styled-components/native";
import Theme from "../../../Theme/Theme";
import ScrollViewLayout from "../../Layout/ScrollViewLayout";

const InfoSearchInput = () => {
  return (
    <ScrollViewLayout>
      <ImageBackground
        source={require("../../../assets/background/main.png")}
        style={styles.bgImage}
      >
        <View style={[styles.container, styles.header]}>
          <Input />
          <TouchableOpacity>
            <Image source={require("../../../assets/Icon/Search-bg-ver.png")} />
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </ScrollViewLayout>
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
