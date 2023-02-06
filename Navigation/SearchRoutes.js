import { createNativeStackNavigator } from "@react-navigation/native-stack";
import InfoSearchRes from "../Components/Search/Presenters/InfoSearchRes";
import InfoSearchNotAvailable from "../Components/Search/Presenters/InfoSearchNotAvailable";
const SearchStack = createNativeStackNavigator();

function SearchRoutes() {
  return <SearchStack.Navigator>
    <SearchStack.Screen
        name="InfoSearchRes"
        component={InfoSearchRes}
        options={{ headerShown: false }}
      />
      <SearchStack.Screen
        name="InfoSearchNotAvailable"
        component={InfoSearchNotAvailable}
        options={{ headerShown: false }}
      />
  </SearchStack.Navigator>;
}
