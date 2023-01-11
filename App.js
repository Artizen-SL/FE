import { StatusBar } from "expo-status-bar";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./Screen/Login/Login";

import Theme from "./Theme/Theme";
import {
  BottomTabBar,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import Test from "./Screen/Test/Test";
import Test1 from "./Screen/Test/Test1";
import MainRoutes from "./Navigation/MainRoutes";

const Tab = createBottomTabNavigator();
export default function App() {
  return (
    <NavigationContainer theme={Theme}>
      <Tab.Navigator>
        <Tab.Screen name="MainRoutes" component={MainRoutes} />
        <Tab.Screen name="Test" component={Test} />
        <Tab.Screen name="Test1" component={Test1} />
        <Tab.Screen name="Login" component={Login} />
      </Tab.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
