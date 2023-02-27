import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { ThemeProvider } from "styled-components/native";
import KakaoLogin from "./Screen/Login/KakaoLogin";
import CommunityRoutes from "./Navigation/CommunityRoutes";
import Theme from "./Theme/Theme";
import MainRoutes from "./Navigation/MainRoutes";
import Login from "./Screen/Login/Login";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider, useAtom, useAtomValue, useSetAtom } from "jotai";
import KakaoLogout from "./Screen/Login/KakaoLogout";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { isLoggedInAtom } from "./Jotai/atoms/authAtoms";
import MainTab from "./Navigation/MainTab";
import { Suspense, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import IsLoading from "./Common/Loading/IsLoading";
import ScreenHeader from "./Common/ScreenHeader/ScreenHeader";
import GeneralLogin from "./Screen/Login/GeneralSignUp";
import GeneralSignUp from "./Screen/Login/GeneralSignUp";
import Test from "./Screen/Test/Test";
// const Tab = createBottomTabNavigator();
const AuthStack = createStackNavigator();
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      suspense: true,
    },
  },
});

export default function App() {
  // Sentry.init({
  //   dsn: process.env.REACT_APP_SENTRY_DSN,
  //   environment: "production",
  //   normalizeDepth: 6,
  // });
  // const [isLoggedIn, setIsLoggedIn] = useState(true);

  const isLoggedIn = useAtomValue(isLoggedInAtom);
  const setIsLoggedIn = useSetAtom(isLoggedInAtom);

  useEffect(() => {
    // Fetch the token from storage then navigate to our appropriate place
    const getTokenAsync = async () => {
      let userToken;

      try {
        userToken = await AsyncStorage.getItem("accessToken");
      } catch (e) {
        // Restoring token failed
      }
      if (userToken) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    };

    getTokenAsync();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <ThemeProvider theme={Theme}>
          <Suspense fallback={<IsLoading />}>
            <Provider>
              <AuthStack.Navigator
                initialRouteName="Test"
                // initialRouteName="Login"
                screenOptions={{
                  headerStyle: {
                    backgroundColor: "#48B7E2",
                  },
                  headerLeft: false,
                }}
              >
                <AuthStack.Screen
                  name="MainTab"
                  component={MainTab}
                  options={{
                    headerTitle: () => <ScreenHeader />,
                  }}
                />
                <AuthStack.Screen
                  name="Test"
                  component={Test}
                  options={{ headerShown: false }}
                />
                {/* <AuthStack.Screen
                  name="Login"
                  component={Login}
                  options={{ headerShown: false }}
                /> */}
                {/* <AuthStack.Screen
                  name="GeneralSignUp"
                  component={GeneralSignUp}
                  options={{ headerShown: false }}
                /> */}
                <AuthStack.Screen
                  name="KakaoLogin"
                  component={KakaoLogin}
                  options={{ headerShown: false }}
                />
              </AuthStack.Navigator>
            </Provider>
          </Suspense>
        </ThemeProvider>
      </NavigationContainer>
    </QueryClientProvider>
  );
}
