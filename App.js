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
// import * as Sentry from "@sentry/react-native";
import { Provider } from "jotai";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const Tab = createBottomTabNavigator();
const queryClient = new QueryClient();
export default function App() {
  // Sentry.init({
  //   dsn: process.env.REACT_APP_SENTRY_DSN,
  //   environment: "production",
  //   normalizeDepth: 6,
  // });

  return (
    <QueryClientProvider client={queryClient}>
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
    </QueryClientProvider>
  );
}
