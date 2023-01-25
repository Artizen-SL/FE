import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Main from "../Screen/Main/Main";
import NoticeList from "../Screen/Notice/NoticeList";

import CategoryDetail from "../Screen/ContentList/CategoryDetail";
import ContentDetail from "../Screen/ContentList/ContentDetail";

const MainStack = createNativeStackNavigator();

function MainRoutes() {
  return (
    <MainStack.Navigator initialRouteName="Main">
      <MainStack.Screen
        name="Main"
        // component={Main}
        options={{ headerShown: false }}
      >
        {(props) => <Main {...props} />}
      </MainStack.Screen>
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
      <MainStack.Screen
        name="NoticeList"
        component={NoticeList}
        // options={{ headerShown: false }}
      />
    </MainStack.Navigator>
  );
}

export default MainRoutes;
