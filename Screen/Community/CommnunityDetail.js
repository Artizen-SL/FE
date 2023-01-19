import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

const CommnunityDetail = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("CommunityRoutes", {
          screen: "CommunityPost",
        })
      }
    >
      <Text>CommnunityDetail</Text>
    </TouchableOpacity>
  );
};

export default CommnunityDetail;
