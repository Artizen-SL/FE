import { useNavigation } from "@react-navigation/native";
import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import Theme from "../../Theme/Theme";
import ScrollViewLayout from "../Components/Layout/ScrollViewLayout";
import styled, { css } from "styled-components/native";

const RecentlyPost = ({ datas }) => {
  console.log("datas==>", datas);
  return (
    <View>
      {datas?.map((data) => {
        return (
          <Round>
            <Image
              style={styles.round}
              source={{ uri: data?.posterUrl }}
              key={data?.id}
            />
          </Round>
        );
      })}
    </View>
  );
};

export default RecentlyPost;

const styles = StyleSheet.create({
  container2: {
    width: "100%",
    height: 200,
  },
  round: {
    width: 100,
    height: 100,
    // borderRadius: "50%",
  },
  center: {
    alignItems: "center",
    justifyContent: "center",
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
  smailTitle: {
    marginLeft: 6,
    marginBottom: 6,
    borderBottomColor: Theme.colors.Black,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

const SmallRound = styled.View`
  width: 50px;
  height: 50px;
  border: 1px solid ${Theme.colors.LightGray};
`;

const Round = styled.View`
  width: 100px;
  height: 100px;
  border-radius: 50%;
`;
