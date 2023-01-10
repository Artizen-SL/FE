import {
  StyleSheet,
  View,
  Text,
  Button,
  Image,
  TouchableOpacity,
} from "react-native";
import styled, { css } from "styled-components/native";
import Theme from "../../Theme/Theme";
import BottomTabBar from "../components/BottomTabs/BottomTabBar";
import ConcertList from "../ContentLIst/ConcertList";
import ExpoList from "../ContentLIst/ExpoList";
import FineArtList from "../ContentLIst/FineArtList";
import ShowList from "../ContentLIst/ShowList";

const Main = ({ navigation }) => {
  return (
    <StView style={styles.container}>
      <Text>메인화면</Text>
      <TouchableOpacity onPress={() => navigation.navigate("Login")}>
        <Text>로그인</Text>
      </TouchableOpacity>
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
    </StView>
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
});

const StView = styled.View`
  background-color: pink;
`;

const SmallRound = styled.View`
  width: 50px;
  height: 50px;
  border: 1px solid ${Theme.colors.LightGray};
`;
