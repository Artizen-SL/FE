import {
  StyleSheet,
  View,
  Text,
  Button,
  Image,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
} from "react-native";
import styled, { css } from "styled-components/native";
import Theme from "../../Theme/Theme";
import ScrollViewLayout from "../Components/Layout/ScrollViewLayout";
import MainCarousel from "./MainCarousel";

const Main = ({ navigation }) => {
  return (
    <ScrollViewLayout>
      <View style={[styles.container, styles.header]}>
        <ImageBackground
          source={require("../../assets/background/main.png")}
          style={styles.bgImage}
        >
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "space-between",
              margin: 5,
            }}
          >
            <Image
              source={require("../../assets/login/logo_v1_3.png")}
              style={styles.logo}
            />
            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
              <Text>로그인</Text>
            </TouchableOpacity>
          </View>
          <MainCarousel/>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "space-evenly",
              margin: 5,
            }}
          >
            <TouchableOpacity
              style={styles.center}
              onPress={() =>
                navigation.navigate("MainRoutes", {
                  screen: "CategoryDetail",
                  params: { category: "FineArtList" },
                })
              }
            >
              <Image source={require("../../assets/Icon/gallery.png")} />
              <Text>미술관</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.center}
              onPress={() =>
                navigation.navigate("MainRoutes", {
                  screen: "CategoryDetail",
                  params: { category: "ConcertList" },
                })
              }
            >
              <Image source={require("../../assets/Icon/gallery.png")} />
              <Text>ConcertList</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.center}
              onPress={() =>
                navigation.navigate("MainRoutes", {
                  screen: "CategoryDetail",
                  params: { category: "ExpoList" },
                })
              }
            >
              <Image source={require("../../assets/Icon/gallery.png")} />
              <Text>ExpoList</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.center}
              onPress={() =>
                navigation.navigate("MainRoutes", {
                  screen: "CategoryDetail",
                  params: { category: "ShowList" },
                })
              }
            >
              <Image source={require("../../assets/Icon/gallery.png")} />
              <Text>ShowList</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    </ScrollViewLayout>
  );
};

export default Main;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  smallRound: {
    width: 50,
    height: 50,
    borderRadius: 50,
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
