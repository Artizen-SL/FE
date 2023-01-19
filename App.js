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
import KakaoLogin from "./Screen/Login/KakaoLogin";
import CommunityRoutes from "./Navigation/CommunityRoutes";

const Tab = createBottomTabNavigator();
export default function App() {
  return (
    <NavigationContainer theme={Theme}>
      <Tab.Navigator>
        <Tab.Screen
          name="MainRoutes"
          component={MainRoutes}
          options={{ headerShown: false }}
        />
        <Tab.Screen name="CommunityRoutes" component={CommunityRoutes} />
        <Tab.Screen name="Test1" component={Test1} />
        <Tab.Screen name="Login" component={Login} />
        <Tab.Screen name="KakaoLogin" component={KakaoLogin} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
