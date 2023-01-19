import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

const CommunityPost = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("CommunityRoutes", {
          screen: "CommunityMain",
        })
      }
    >
      <Text>CommunityPost</Text>
    </TouchableOpacity>
  );
};

export default CommunityPost;
