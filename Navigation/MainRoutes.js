import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import CategoryDetail from "../Screen/ContentLIst/CategoryDetail";
import ContentDetail from "../Screen/ContentLIst/ContentDetail";
import Main from "../Screen/Main/Main";
import Theme from "../Theme/Theme";

const MainStack = createNativeStackNavigator();

function MainRoutes() {
  return (
    <MainStack.Navigator initialRouteName="Main">
      <MainStack.Screen
        name="Main"
        component={Main}
        options={{ headerShown: false }}
      />
      <MainStack.Screen
        name="CategoryDetail"
        component={CategoryDetail}
        // options={{ headerShown: false }}
      />
      <MainStack.Screen
        name="ContentDetail"
        component={ContentDetail}
        // options={{ headerShown: false }}
      />
    </MainStack.Navigator>
  );
}

export default MainRoutes;
