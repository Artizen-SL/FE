import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ThemeProvider } from "styled-components/native";
import KakaoLogin from "./Screen/Login/KakaoLogin";
import CommunityRoutes from "./Navigation/CommunityRoutes";
import Theme from "./Theme/Theme";
import MainRoutes from "./Navigation/MainRoutes";
import Login from "./Screen/Login/Login";
import KakaoLogout from "./Screen/Login/KakaoLogout";
import { Provider } from "jotai"

const Tab = createBottomTabNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Provider>
      <ThemeProvider theme={Theme}>
        <Tab.Navigator>
          <Tab.Screen
            name="MainRoutes"
            component={MainRoutes}
            options={{ headerShown: false }}
          />
          <Tab.Screen
            name="CommunityRoutes"
            component={CommunityRoutes}
            options={{ headerShown: false }}
          />
          <Tab.Screen name="Login" component={Login} />
          <Tab.Screen name="KakaoLogin" component={KakaoLogin} />
          <Tab.Screen name="KakaoLogout" component={KakaoLogout} />
        </Tab.Navigator>
      </ThemeProvider>
      </Provider>
    </NavigationContainer>
  );
}
