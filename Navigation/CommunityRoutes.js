import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CommunityMain from "../Screen/Community/CommunityMain";
import CommnunityDetail from "../Screen/Community/CommnunityDetail";
import CommunityPost from "../Screen/Community/CommunityPost";

const CommunityStack = createNativeStackNavigator();

function CommunityRoutes() {
  return (
    <CommunityStack.Navigator initialRouteName="CommunityMain">
      <CommunityStack.Screen
        name="CommunityMain"
        options={{ headerShown: false }}
      >
        {(props) => <CommunityMain {...props} />}
      </CommunityStack.Screen>
      <CommunityStack.Screen
        name="CommnunityDetail"
        component={CommnunityDetail}
        options={{ headerShown: false }}
      />
      <CommunityStack.Screen
        name="CommunityPost"
        component={CommunityPost}
        options={{ headerShown: false }}
      />
    </CommunityStack.Navigator>
  );
}

export default CommunityRoutes;
