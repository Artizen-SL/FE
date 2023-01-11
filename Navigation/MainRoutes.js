import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import CategoryDetail from "../Screen/ContentLIst/CategoryDetail";
import ConcertList from "../Screen/ContentLIst/ConcertList";
import ExpoList from "../Screen/ContentLIst/ExpoList";
import FineArtList from "../Screen/ContentLIst/FineArtList";
import ShowList from "../Screen/ContentLIst/ShowList";
import Main from "../Screen/Main/Main";

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
        options={{ headerShown: false }}
      />
      {/* <MainStack.Screen name="FineArtList" component={FineArtList} />
      <MainStack.Screen name="ConcertList" component={ConcertList} />
      <MainStack.Screen name="ExpoList" component={ExpoList} />
      <MainStack.Screen name="ShowList" component={ShowList} /> */}
    </MainStack.Navigator>
  );
}

export default MainRoutes;
