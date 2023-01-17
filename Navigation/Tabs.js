import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Test from "../Screen/Test/Test";
import Test1 from "../Screen/Test/Test1";
import BottomTabBar from "../Screen/Common/BottomTabs/BottomTabBar";
import Main from "../Screen/Main/Main";

const Tab = createBottomTabNavigator();
function Tabs() {
  return (
    <Tab.Navigator tabBar={(props) => <BottomTabBar {...props} />}>
      <Tab.Screen name="Main" component={Main} />
      <Tab.Screen name="Test" component={Test} />
      <Tab.Screen name="Test1" component={Test1} />
    </Tab.Navigator>
  );
}

export default Tabs;
