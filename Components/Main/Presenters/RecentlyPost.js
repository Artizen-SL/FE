import { StyleSheet, Text, View, Image,TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";
import { useNavigation } from "@react-navigation/native";

const RecentlyPost = ({ datas }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.row}>
      {datas?.map((data) => {
        return (
          <Round 
            style={{ margin: 3, marginTop: 6, alignItems: "center" }}
            key={data?.contentId}
            onPress={() =>
              navigation.navigate("ContentDetail", {
                screen: "ContentDetail",
                id: data?.contentId,
              })
            }
          >
             <View  styles={styled.center}>
            <RoundWrapper>
              <RoundImage source={{ uri: data?.posterUrl }} />
            </RoundWrapper>           
              <TitleTextBl numberOfLines={2} ellipsizeMode="tail">
                {data?.title}
              </TitleTextBl>
            </View>
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
  center: {
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center",
    justifyItems: "center",
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

const RoundImage = styled(Image)`
  width: 100%;
  height: 100%;
  border-radius: 50px;
`;
const RoundWrapper = styled(View)`
  width: 100px;
  height: 100px;
  /* border-width: 1px; */
  border-radius: 50px;
`;

const Round = styled(TouchableOpacity )`
  width: 100px;
  height: 150px;
`;

const TitleTextBl = styled(Text)`
  font-size: 12px;
`;
