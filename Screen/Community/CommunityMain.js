import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

const CommunityMain = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("CommunityRoutes", {
          screen: "CommnunityDetail",
        })
      }
    >
      <Text>CommunityMain</Text>
    </TouchableOpacity>
  );
};

export default CommunityMain;
