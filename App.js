import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Main from "./Screen/Main/Main";
import FineArtList from "./Screen/ContentLIst/FineArtList";
import ShowList from "./Screen/ContentLIst/ShowList";
import ExpoList from "./Screen/ContentLIst/ExpoList";
import ConcertList from "./Screen/ContentLIst/ConcertList";
import Login from "./Screen/Login/Login";
import Theme from "./Theme/Theme";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer theme={Theme}>
      <Stack.Navigator initialRouteName="Main">
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="FineArtList" component={FineArtList} />
        <Stack.Screen name="ConcertList" component={ConcertList} />
        <Stack.Screen name="ExpoList" component={ExpoList} />
        <Stack.Screen name="ShowList" component={ShowList} />
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
