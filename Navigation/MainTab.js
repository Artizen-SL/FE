import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
// import KakaoLogout from "../Screen/Login/KakaoLogout";
import CommunityRoutes from "./CommunityRoutes";
import MainRoutes from "./MainRoutes";
import MyPage from "../Components/MyPage/MyPage";
import { Ionicons } from "@expo/vector-icons";
import { Alert } from "react-native";

const MainBottomTab = createBottomTabNavigator();

const MainTab = () => {
  return (
    <MainBottomTab.Navigator initialRouteName="MainRoutes">
      <MainBottomTab.Screen
        name="MainRoutes"
        component={MainRoutes}
        options={{
          headerShown: false,
          tabBarLabel: "아티즌",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" color={color} size={size} />
          ),
        }}
      />
      <MainBottomTab.Screen
        name="CommunityRoutes"
        component={CommunityRoutes}
        options={{
          headerShown: false,
          tabBarLabel: "자유게시판",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="reader-outline" color={color} size={size} />
          ),
        }}
      />
      <MainBottomTab.Screen
        name="MyPage"
        component={MyPage}
        options={{
          headerShown: false,
          tabBarLabel: "MY",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="ios-person-outline" color={color} size={size} />
          ),
        }}
      />
    </MainBottomTab.Navigator>
  );
};

export default MainTab;
