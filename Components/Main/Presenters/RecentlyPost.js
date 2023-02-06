import { StyleSheet, Text, View } from "react-native";
import styled, { css } from "styled-components/native";

const RecentlyPost = ({ datas }) => {
  return (
    <View style={styles.row}>
      {datas?.map((data) => {
        return (
          <Round
            style={{ margin: 3, marginTop: 6, alignItems: "center" }}
            key={data?.id}
          >
            <RoundImage source={{ uri: data?.posterUrl }} />
            <Text>{data?.name}</Text>
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
    borderRadius: 50,
  },
  center: {
    alignItems: "center",
    justifyContent: "center",
  },
  smallText: {
    fontSize: 12,
    marginLeft: 5,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    margin: 6,
  },
});

const RoundImage = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 50;
`;

const Round = styled.View`
  width: 100px;
  height: 150px;
`;
