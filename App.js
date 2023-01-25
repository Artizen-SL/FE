import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import KakaoLogin from "./Screen/Login/KakaoLogin";
import CommunityRoutes from "./Navigation/CommunityRoutes";
import Theme from "./Theme/Theme";
import MainRoutes from "./Navigation/MainRoutes";
import Login from "./Screen/Login/Login";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const Tab = createBottomTabNavigator();
const queryClient = new QueryClient();
export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer theme={Theme}>
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
        </Tab.Navigator>
      </NavigationContainer>
    </QueryClientProvider>
  );
}
