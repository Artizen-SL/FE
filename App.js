import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Main from "./Screen/Main/Main";
import Theme from "./Theme/Theme";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer theme={Theme}>
      <Stack.Navigator initialRouteName="Main">
          <Stack.Screen name="Main" component={Main} />         
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
