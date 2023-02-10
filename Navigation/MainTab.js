import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import KakaoLogout from "../Screen/Login/KakaoLogout";
import CommunityRoutes from "./CommunityRoutes";
import MainRoutes from "./MainRoutes";
import Test from "../Screen/Test/Test";
const MainBottomTab = createBottomTabNavigator();

const MainTab = () => {
  return (
    <MainBottomTab.Navigator initialRouteName="MainRoutes">
      <MainBottomTab.Screen
        name="MainRoutes"
        component={MainRoutes}
        options={{ headerShown: false }}
      />
      <MainBottomTab.Screen
        name="CommunityRoutes"
        component={CommunityRoutes}
        options={{ headerShown: false }}
      />
      <MainBottomTab.Screen
        name="KakaoLogout"
        component={KakaoLogout}
        options={{ headerShown: false }}
      />

      <MainBottomTab.Screen
        name="Test"
        component={Test}
        options={{ headerShown: false }}
      />
    </MainBottomTab.Navigator>
  );
};

export default MainTab;
