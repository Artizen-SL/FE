import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SearchRes from "../Components/Search/SearchRes";

const SearchStack = createNativeStackNavigator();

function SearchRoutes() {
  return <SearchStack.Navigator>
    <CommunityStack.Screen
        name="CommunityDetail"
        component={CommunityDetail}
        options={{ headerShown: false }}
      />
  </SearchStack.Navigator>;
}
