import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import CategoryDetail from "../Screen/ContentList/CategoryDetail";
import ContentDetail from "../Screen/ContentList/ContentDetail";
import Main from "../Screen/Main/Main";
import NoticeRoutes from "../Navigation/NoticeRoutes";
import MyPageRoutes from "./MyPageRoutes";
import Search from "../Screen/Search/Search";

const MainStack = createNativeStackNavigator();

function MainRoutes() {
  return (
    <MainStack.Navigator initialRouteName="Main">
      <MainStack.Screen name="Main" options={{ headerShown: false }}>
        {(props) => <Main {...props} />}
      </MainStack.Screen>
      <MainStack.Screen
        name="CategoryDetail"
        component={CategoryDetail}
        options={{ headerShown: false }}
      />
      <MainStack.Screen
        name="ContentDetail"
        component={ContentDetail}
        options={{ headerShown: false }}
      />
      <MainStack.Screen
        name="NoticeRoutes"
        component={NoticeRoutes}
        options={{ headerShown: false }}
      />
      <MainStack.Screen
        name="MyPageRoutes"
        component={MyPageRoutes}
        options={{ headerShown: false }}
      />
      <MainStack.Screen
        name="Search"
        component={Search}
        options={{ headerShown: false }}
      />
    </MainStack.Navigator>
  );
}

export default MainRoutes;
